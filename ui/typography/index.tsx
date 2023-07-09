import styled from "styled-components";
import Link from "next/link";

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  font-family: "Inter", sans-serif;
`;

export const Subtitle = styled(Title).attrs({
  as: "h2",
})`
  font-size: 32px;
`;

export const BoldLarge = styled(Title).attrs({ as: "h3" })`
  font-size: 20px;
`;
export const RegularLarge = styled(BoldLarge).attrs({ as: "h3" })`
  font-weight: 400;
`;

export const RegularBody = styled.p`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 16 px;
  font-weight: 400;
`;

export const BoldBody = styled(RegularBody)`
  font-weight: 700;
`;

export const TinySpan = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 40;
`;

type NextLink = {
  path: string;
  children: React.ReactNode;
  target?: string;
};

export function NextLink({ children, path, target = "" }: NextLink) {
  return (
    <Link
      href={path}
      style={{ textDecoration: "none" }}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
