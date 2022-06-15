import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";
import Selector, { ISelectorOption } from "../../../components/Selector";
import { ETimeWindow } from "../../const";
import React from "react";

export const MediaListHOC = (WC: NextPage): FC => {
  const component: FC = (props): ReactElement => {
    const router = useRouter();

    const options: ISelectorOption[] = [
      { title: ETimeWindow.day.toUpperCase(), value: ETimeWindow.day },
      { title: ETimeWindow.week.toUpperCase(), value: ETimeWindow.week },
    ];

    const change = (timeWindow: string): void => {
      router.push({
        query: { timeWindow },
      });
    };

    return (
      <Container>
        <Selector options={options} onChange={change} />
        <WC {...props} />
      </Container>
    );
  };

  return component;
};
