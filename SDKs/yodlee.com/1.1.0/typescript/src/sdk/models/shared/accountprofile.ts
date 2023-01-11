import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { Email } from "./email";
import { Identifier } from "./identifier";
import { PhoneNumber } from "./phonenumber";



export class AccountProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address", elemType: AccountAddress })
  address?: AccountAddress[];

  @SpeakeasyMetadata({ data: "json, name=email", elemType: Email })
  email?: Email[];

  @SpeakeasyMetadata({ data: "json, name=identifier", elemType: Identifier })
  identifier?: Identifier[];

  @SpeakeasyMetadata({ data: "json, name=phoneNumber", elemType: PhoneNumber })
  phoneNumber?: PhoneNumber[];
}
