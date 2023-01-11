"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCompanyContactsResponse = exports.SearchCompanyContactsRequest = exports.SearchCompanyContacts200ApplicationJson = exports.SearchCompanyContacts200ApplicationJsonContacts = exports.SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum = exports.SearchCompanyContactsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var SearchCompanyContactsQueryParams = /** @class */ (function (_super) {
    __extends(SearchCompanyContactsQueryParams, _super);
    function SearchCompanyContactsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], SearchCompanyContactsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], SearchCompanyContactsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query_presence_status" }),
        __metadata("design:type", String)
    ], SearchCompanyContactsQueryParams.prototype, "queryPresenceStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search_key" }),
        __metadata("design:type", String)
    ], SearchCompanyContactsQueryParams.prototype, "searchKey", void 0);
    return SearchCompanyContactsQueryParams;
}(utils_1.SpeakeasyBase));
exports.SearchCompanyContactsQueryParams = SearchCompanyContactsQueryParams;
var SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum;
(function (SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum) {
    SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum["DoNotDisturb"] = "Do_Not_Disturb";
    SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum["Away"] = "Away";
    SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum["Available"] = "Available";
    SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum["Offline"] = "Offline";
})(SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum = exports.SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum || (exports.SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum = {}));
var SearchCompanyContacts200ApplicationJsonContacts = /** @class */ (function (_super) {
    __extends(SearchCompanyContacts200ApplicationJsonContacts, _super);
    function SearchCompanyContacts200ApplicationJsonContacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direct_numbers" }),
        __metadata("design:type", Array)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "directNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=im_group_id" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "imGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=im_group_name" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "imGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_title" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=presence_status" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "presenceStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_phone_number" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJsonContacts.prototype, "sipPhoneNumber", void 0);
    return SearchCompanyContacts200ApplicationJsonContacts;
}(utils_1.SpeakeasyBase));
exports.SearchCompanyContacts200ApplicationJsonContacts = SearchCompanyContacts200ApplicationJsonContacts;
var SearchCompanyContacts200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchCompanyContacts200ApplicationJson, _super);
    function SearchCompanyContacts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contacts", elemType: SearchCompanyContacts200ApplicationJsonContacts }),
        __metadata("design:type", Array)
    ], SearchCompanyContacts200ApplicationJson.prototype, "contacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], SearchCompanyContacts200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], SearchCompanyContacts200ApplicationJson.prototype, "pageSize", void 0);
    return SearchCompanyContacts200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SearchCompanyContacts200ApplicationJson = SearchCompanyContacts200ApplicationJson;
var SearchCompanyContactsRequest = /** @class */ (function (_super) {
    __extends(SearchCompanyContactsRequest, _super);
    function SearchCompanyContactsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchCompanyContactsQueryParams)
    ], SearchCompanyContactsRequest.prototype, "queryParams", void 0);
    return SearchCompanyContactsRequest;
}(utils_1.SpeakeasyBase));
exports.SearchCompanyContactsRequest = SearchCompanyContactsRequest;
var SearchCompanyContactsResponse = /** @class */ (function (_super) {
    __extends(SearchCompanyContactsResponse, _super);
    function SearchCompanyContactsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SearchCompanyContactsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SearchCompanyContactsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SearchCompanyContactsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchCompanyContacts200ApplicationJson)
    ], SearchCompanyContactsResponse.prototype, "searchCompanyContacts200ApplicationJSONObject", void 0);
    return SearchCompanyContactsResponse;
}(utils_1.SpeakeasyBase));
exports.SearchCompanyContactsResponse = SearchCompanyContactsResponse;
