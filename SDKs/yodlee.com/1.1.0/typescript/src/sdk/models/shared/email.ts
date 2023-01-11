import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EmailTypeEnum {
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
    Personal = "PERSONAL",
    Work = "WORK",
    Others = "OTHERS"
}


export class Email extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EmailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
