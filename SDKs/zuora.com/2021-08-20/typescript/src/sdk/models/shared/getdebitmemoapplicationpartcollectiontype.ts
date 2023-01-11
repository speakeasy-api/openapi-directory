import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetDebitMemoApplicationPartType } from "./getdebitmemoapplicationparttype";



export class GetDebitMemoApplicationPartCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationParts", elemType: GetDebitMemoApplicationPartType })
  applicationParts?: GetDebitMemoApplicationPartType[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
