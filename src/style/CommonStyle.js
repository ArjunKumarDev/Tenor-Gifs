import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 544px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 940px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  .infinite-scroll-component {
    overflow: hidden !important;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
`;
