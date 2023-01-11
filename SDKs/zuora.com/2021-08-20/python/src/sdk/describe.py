import requests
from sdk.models import operations
from . import utils

class Describe:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_describe(self, request: operations.GetDescribeRequest) -> operations.GetDescribeResponse:
        r"""Describe an object
        Provides a reference listing of each object that is available in your Zuora tenant.
        
        The information returned by this call is useful if you are using [CRUD: Create Export](https://www.zuora.com/developer/api-reference/#operation/Object_POSTExport) or the [AQuA API](https://knowledgecenter.zuora.com/DC_Developers/T_Aggregate_Query_API) to create a data source export. See [Export ZOQL](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) for more information.
        
        ## Response
        The response contains an XML document that lists the fields of the specified object. Each of the object's fields is represented by a `<field>` element in the XML document.
            
        Each `<field>` element contains the following elements:
        
        | Element      | Description                                                                                                                                                                                                                                                                                  |
        |--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
        | `<name>`     | API name of the field.                                                                                                                                                                                                                                                                       |
        | `<label>`    | Name of the field in the Zuora user interface.                                                                                                                                                                                                                                               |
        | `<type>`     | Data type of the field. The possible data types are: `boolean`, `date`, `datetime`, `decimal`, `integer`, `picklist`, `text`, `timestamp`, and `ZOQL`. If the data type is `picklist`, the `<field>` element contains an `<options>` element that lists the possible values of the field.    |
        | `<contexts>` | Specifies the availability of the field. If the `<contexts>` element lists the `export` context, the field is available for use in data source exports.                                                                                                                                                |
        
        The `<field>` element contains other elements that provide legacy information about the field. This information is not directly related to the REST API.
        
        Response sample:
        ```xml
        <?xml version=\"1.0\" encoding=\"UTF-8\"?>
        <object>
          <name>ProductRatePlanCharge</name>
          <label>Product Rate Plan Charge</label>
          <fields>
            ...
            <field>
              <name>TaxMode</name>
              <label>Tax Mode</label>
              <type>picklist</type>
              <options>
                <option>TaxExclusive</option>
                <option>TaxInclusive</option>
              </options>
              <contexts>
                <context>export</context>
              </contexts>
              ...
            </field>
            ...
          </fields>
        </object>
        ```
        
        It is strongly recommended that your integration checks `<contexts>` elements in the response. If your integration does not check `<contexts>` elements, your integration may process fields that are not available for use in data source exports. See [Changes to the Describe API](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL/Changes_to_the_Describe_API) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/describe/{object}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/xml; charset=utf-8"):
                res.get_describe_200_text_xml_string = r.content
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/xml; charset=utf-8"):
                res.get_describe_404_text_xml_string = r.content

        return res

    