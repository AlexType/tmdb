import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";

import CardHuman from "../src/components/CardHuman";
import Selector, { ISelectorOption } from "../src/components/Selector";

import type { GetStaticProps, NextPage } from "next";
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

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props?.locale || "ru", ["common"])),
  },
});

export default Home;
