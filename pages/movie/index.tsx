import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CardMedia from "../../src/components/CardMedia";
import { EMediaType, ETimeWindow, imgPath } from "../../src/utils/const";
import MediaListHOC from "../../src/utils/hoc/MediaListHOC";
import { IMoviePreview } from "../../src/utils/models/movie/IMoviePreview";
import { MediaService } from "../../src/utils/services/MediaService";

const Movie: NextPage = (): ReactElement => {
  const [media, setMedia] = useState<IMoviePreview[]>([]);
  const { t } = useTranslation("common");
  const { query } = useRouter();

  useEffect(() => {
    const timeWindow = (query.timeWindow as string) || ETimeWindow.day;

    MediaService.trending(1, EMediaType.movie, timeWindow)
      .then((res) => res.data)
      .then((data) => setMedia(data.results as IMoviePreview[]));
  }, [query]);

  return (
    <Fragment>
      <Head>
        <title>{t("MOVIE")}</title>
      </Head>

      <Row className="row-cols-6 g-4">
        {media.map((item) => (
          <Col key={item.id}>
            <CardMedia
              id={item.id}
              type="bordered"
              title={item.title}
              date={item.release_date}
              genreIds={item.genre_ids}
              rating={item.vote_average}
              mediaType={item.media_type}
              originalTile={item.original_title}
              src={imgPath(item.poster_path, "w440_and_h660_face")}
            />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props?.locale || "ru", ["common"])),
  },
});

export default MediaListHOC(Movie);
