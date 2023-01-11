import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInvoiceEmailRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddresses" })
  emailAddresses?: string;

  @SpeakeasyMetadata({ data: "json, name=includeAdditionalEmailAddresses" })
  includeAdditionalEmailAddresses?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useEmailTemplateSetting" })
  useEmailTemplateSetting?: boolean;
}
