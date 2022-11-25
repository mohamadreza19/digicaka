import {
  FreshBox,
  FreshContentBox,
  FreshDiscount,
  FreshDiscountBox,
  FreshEndBox,
  FreshItemsBox,
  FreshStartBox,
  FreshStartImg,
  FreshStartImgBox,
} from "../../styles/appmain";

export default function Fresh() {
  return (
    <FreshBox className="fresh-box">
      <FreshItemsBox>
        <FreshStartBox>
          <FreshStartImgBox>
            <FreshStartImg src="/images/freshOfferBox.png" />
          </FreshStartImgBox>
          <FreshStartImgBox>
            <FreshStartImg src="/images/fresh.svg" />
          </FreshStartImgBox>
          <FreshDiscountBox>
            <FreshDiscount variant="body1">
              تا
              {`51%`}
              تخفیف
            </FreshDiscount>
          </FreshDiscountBox>
        </FreshStartBox>
        <FreshEndBox>
          <FreshContentBox>test</FreshContentBox>
        </FreshEndBox>
      </FreshItemsBox>
    </FreshBox>
  );
}
