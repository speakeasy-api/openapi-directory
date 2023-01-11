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
exports.ListPhoneSitesResponse = exports.ListPhoneSitesRequest = exports.ListPhoneSites200ApplicationJson = exports.ListPhoneSites200ApplicationJsonSites = exports.ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist = exports.ListPhoneSites200ApplicationJsonSitesCountry = exports.ListPhoneSitesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListPhoneSitesQueryParams = /** @class */ (function (_super) {
    __extends(ListPhoneSitesQueryParams, _super);
    function ListPhoneSitesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListPhoneSitesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListPhoneSitesQueryParams.prototype, "pageSize", void 0);
    return ListPhoneSitesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListPhoneSitesQueryParams = ListPhoneSitesQueryParams;
// ListPhoneSites200ApplicationJsonSitesCountry
/**
 * Site country
**/
var ListPhoneSites200ApplicationJsonSitesCountry = /** @class */ (function (_super) {
    __extends(ListPhoneSites200ApplicationJsonSitesCountry, _super);
    function ListPhoneSites200ApplicationJsonSitesCountry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJsonSitesCountry.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJsonSitesCountry.prototype, "name", void 0);
    return ListPhoneSites200ApplicationJsonSitesCountry;
}(utils_1.SpeakeasyBase));
exports.ListPhoneSites200ApplicationJsonSitesCountry = ListPhoneSites200ApplicationJsonSitesCountry;
// ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist
/**
 * Auto Receptionist for each site.
**/
var ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist = /** @class */ (function (_super) {
    __extends(ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist, _super);
    function ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_id" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist.prototype, "extensionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist.prototype, "name", void 0);
    return ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist;
}(utils_1.SpeakeasyBase));
exports.ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist = ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist;
var ListPhoneSites200ApplicationJsonSites = /** @class */ (function (_super) {
    __extends(ListPhoneSites200ApplicationJsonSites, _super);
    function ListPhoneSites200ApplicationJsonSites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", ListPhoneSites200ApplicationJsonSitesCountry)
    ], ListPhoneSites200ApplicationJsonSites.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJsonSites.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=main_auto_receptionist" }),
        __metadata("design:type", ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist)
    ], ListPhoneSites200ApplicationJsonSites.prototype, "mainAutoReceptionist", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJsonSites.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_code" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJsonSites.prototype, "siteCode", void 0);
    return ListPhoneSites200ApplicationJsonSites;
}(utils_1.SpeakeasyBase));
exports.ListPhoneSites200ApplicationJsonSites = ListPhoneSites200ApplicationJsonSites;
var ListPhoneSites200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPhoneSites200ApplicationJson, _super);
    function ListPhoneSites200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sites", elemType: ListPhoneSites200ApplicationJsonSites }),
        __metadata("design:type", Array)
    ], ListPhoneSites200ApplicationJson.prototype, "sites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", String)
    ], ListPhoneSites200ApplicationJson.prototype, "totalRecords", void 0);
    return ListPhoneSites200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListPhoneSites200ApplicationJson = ListPhoneSites200ApplicationJson;
var ListPhoneSitesRequest = /** @class */ (function (_super) {
    __extends(ListPhoneSitesRequest, _super);
    function ListPhoneSitesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneSitesQueryParams)
    ], ListPhoneSitesRequest.prototype, "queryParams", void 0);
    return ListPhoneSitesRequest;
}(utils_1.SpeakeasyBase));
exports.ListPhoneSitesRequest = ListPhoneSitesRequest;
var ListPhoneSitesResponse = /** @class */ (function (_super) {
    __extends(ListPhoneSitesResponse, _super);
    function ListPhoneSitesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListPhoneSitesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPhoneSitesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPhoneSitesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneSites200ApplicationJson)
    ], ListPhoneSitesResponse.prototype, "listPhoneSites200ApplicationJSONObject", void 0);
    return ListPhoneSitesResponse;
}(utils_1.SpeakeasyBase));
exports.ListPhoneSitesResponse = ListPhoneSitesResponse;
