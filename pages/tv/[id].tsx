import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { Fragment, ReactElement, useEffect, useState } from "react";
import MediaInfo, { IMediaInfoProps } from "../../src/components/MediaInfo";
import { toIMediaInfoProps } from "../../src/utils/const";
import { TvService } from "../../src/utils/services/TvService";

const Movie: NextPage = (): ReactElement => {
  const [media, setMedia] = useState<IMediaInfoProps>();
  const { query } = useRouter();

  useEffect(() => {
    if (query?.id) {
      TvService.tv(+query.id)
        .then((res) => res.data)
        .then((data) => setMedia(toIMediaInfoProps(data)));
    }
  }, [query?.id]);

  return <Fragment>{media && <MediaInfo {...media} />}</Fragment>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props?.locale || "ru", ["common"])),
  },
});

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Movie;
