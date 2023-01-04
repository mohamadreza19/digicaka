
import { EB_Title, EB_TitleItemBox } from "../../../styles/product";

export default function SeparableTitles() {
  const lists = [
  ["معرفی"], 
    ["مشخصات"],
     ["دیدگاه"]
    ];
  return (
    <div>
      {lists.map((list, index) => {
        return (
          <EB_TitleItemBox key={index} variant="body1">
            <EB_Title variant="body1">{list}</EB_Title>
          </EB_TitleItemBox>
        );
      })}
    </div>
  );
}
