import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostQuoteDocType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiuser" })
  apiuser?: string;

  @SpeakeasyMetadata({ data: "json, name=documentType" })
  documentType: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=quoteId" })
  quoteId: string;

  @SpeakeasyMetadata({ data: "json, name=sandbox" })
  sandbox?: string;

  @SpeakeasyMetadata({ data: "json, name=serverUrl" })
  serverUrl: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId: string;

  @SpeakeasyMetadata({ data: "json, name=templateId" })
  templateId: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=useSFDCLocale" })
  useSFDCLocale?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=zquotesMajorVersion" })
  zquotesMajorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=zquotesMinorVersion" })
  zquotesMinorVersion?: string;
}
