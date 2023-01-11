import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Description extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumer" })
  consumer?: string;

  @SpeakeasyMetadata({ data: "json, name=original" })
  original?: string;

  @SpeakeasyMetadata({ data: "json, name=security" })
  security?: string;

  @SpeakeasyMetadata({ data: "json, name=simple" })
  simple?: string;
}


export class DescriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumer" })
  consumer?: string;
}
