import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PhoneNumberTypeEnum {
    Home = "HOME",
    Work = "WORK",
    Landline = "LANDLINE",
    Mobile = "MOBILE"
}


export class PhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PhoneNumberTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
