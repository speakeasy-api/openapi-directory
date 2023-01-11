import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { Contact } from "./contact";
import { Coordinates } from "./coordinates";


export enum MerchantSourceEnum {
    Yodlee = "YODLEE",
    Factual = "FACTUAL"
}


export class Merchant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AccountAddress;

  @SpeakeasyMetadata({ data: "json, name=categoryLabel" })
  categoryLabel?: string[];

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: Contact;

  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates?: Coordinates;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: MerchantSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
