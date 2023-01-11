import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetEmailHistoryVoType } from "./getemailhistoryvotype";



export class GetEmailHistoryVOsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailHistories", elemType: GetEmailHistoryVoType })
  emailHistories?: GetEmailHistoryVoType[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
