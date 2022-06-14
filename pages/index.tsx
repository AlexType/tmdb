import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";

import CardHuman from "../src/components/CardHuman";
import CardMedia from "../src/components/CardMedia";
import Selector, { ISelectorOption } from "../src/components/Selector";

import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

const Home: NextPage = (): ReactElement => {
  const options: ISelectorOption[] = [
    { title: "Онлайн", value: "TV" },
    { title: "По ТВ", value: "movie" },
    { title: "Напрокат", value: "free" },
    { title: "В кинотеатрах", value: "cinema" },
  ];

  const { t } = useTranslation("common");

  return (
    <Container>
      <Head>
        <title>{t("MAIN_TITLE")}</title>
      </Head>
      <Selector options={options} />
      <div className="row row-cols-5">
        <div className="col">
          <CardMedia
            src="https://image.tmdb.org/t/p/w220_and_h330_face/3metsxLVhlJU0mNj5gVfKIih0EF.jpg"
            title="Ходячие мертвецы"
          />
        </div>
        <div className="col">
          <CardMedia
            src="https://image.tmdb.org/t/p/w220_and_h330_face/bgOpnrw0vgpIQxVkRvaqHxJMtU.jpg"
            title="Проект «Адам»"
          />
        </div>
      </div>
      <div className="row row-cols-5">
        <div className="col">
          <CardMedia
            src="https://image.tmdb.org/t/p/w220_and_h330_face/3metsxLVhlJU0mNj5gVfKIih0EF.jpg"
            title="Ходячие мертвецы"
            type="bordered"
          />
        </div>
        <div className="col">
          <CardMedia
            src="https://image.tmdb.org/t/p/w220_and_h330_face/bgOpnrw0vgpIQxVkRvaqHxJMtU.jpg"
            title="Проект «Адам»"
            type="bordered"
          />
        </div>
      </div>
      <div className="row row-cols-5">
        <div className="col">
          <CardHuman
            src="https://image.tmdb.org/t/p/w235_and_h235_face/wdmcJagSRJ65AuJ4IUCzuHAdvgy.jpg"
            name="Jennifer Connelly"
            roles={[
              "Человек-паук: Возвращение до",
              "Человек-паук: Возвращение до",
            ]}
          />
        </div>
        <div className="col">
          <CardHuman
            src="https://image.tmdb.org/t/p/w235_and_h235_face/2qhIDp44cAqP2clOgt2afQI07X8.jpg"
            name="Tom Holland"
            roles={[
              "Человек-паук: Возвращение до",
              "Человек-паук: Возвращение до",
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export const getStaticProps = async ({ locale }: any): Promise<any> => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
