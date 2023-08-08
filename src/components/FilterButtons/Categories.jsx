import {
  ChosenSpan,
  ComboBox,
  ComboBoxSection,
  ComboBoxSectionLast,
  Span,
} from "./FilterButtons.styled";

const Categories = ({ chooseCategoryHandler, categoryName, searchParams }) => {
  return (
    <>
      {" "}
      <ComboBox onClick={(e) => chooseCategoryHandler(e)}>
        <ComboBoxSection>
          {categoryName === "Art" ? (
            <ChosenSpan>Art</ChosenSpan>
          ) : (
            <Span>Art</Span>
          )}
        </ComboBoxSection>
        <ComboBoxSection>
          {categoryName === "Music" ? (
            <ChosenSpan>Music</ChosenSpan>
          ) : (
            <Span>Music</Span>
          )}
        </ComboBoxSection>
        <ComboBoxSection>
          {categoryName === "Business" ? (
            <ChosenSpan>Music</ChosenSpan>
          ) : (
            <Span>Business</Span>
          )}
        </ComboBoxSection>
        <ComboBoxSection>
          {categoryName === "Conference" ? (
            <ChosenSpan>Music</ChosenSpan>
          ) : (
            <Span>Conference</Span>
          )}
        </ComboBoxSection>
        <ComboBoxSection>
          {categoryName === "Workshop" ? (
            <ChosenSpan>Music</ChosenSpan>
          ) : (
            <Span>Workshop</Span>
          )}
        </ComboBoxSection>
        <ComboBoxSection>
          {categoryName === "Party" ? (
            <ChosenSpan>Music</ChosenSpan>
          ) : (
            <Span>Party</Span>
          )}
        </ComboBoxSection>
        <ComboBoxSectionLast>
          {categoryName === "Sport" ? (
            <ChosenSpan>Music</ChosenSpan>
          ) : (
            <Span>Sport</Span>
          )}
        </ComboBoxSectionLast>
      </ComboBox>{" "}
    </>
  );
};

export default Categories;
