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
exports.ListWebinarParticipantsResponse = exports.ListWebinarParticipantsRequest = exports.ListWebinarParticipants200ApplicationJson = exports.ListWebinarParticipants200ApplicationJsonParticipants = exports.ListWebinarParticipantsQueryParams = exports.ListWebinarParticipantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListWebinarParticipantsPathParams = /** @class */ (function (_super) {
    __extends(ListWebinarParticipantsPathParams, _super);
    function ListWebinarParticipantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], ListWebinarParticipantsPathParams.prototype, "webinarId", void 0);
    return ListWebinarParticipantsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListWebinarParticipantsPathParams = ListWebinarParticipantsPathParams;
var ListWebinarParticipantsQueryParams = /** @class */ (function (_super) {
    __extends(ListWebinarParticipantsQueryParams, _super);
    function ListWebinarParticipantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListWebinarParticipantsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListWebinarParticipantsQueryParams.prototype, "pageSize", void 0);
    return ListWebinarParticipantsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListWebinarParticipantsQueryParams = ListWebinarParticipantsQueryParams;
var ListWebinarParticipants200ApplicationJsonParticipants = /** @class */ (function (_super) {
    __extends(ListWebinarParticipants200ApplicationJsonParticipants, _super);
    function ListWebinarParticipants200ApplicationJsonParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListWebinarParticipants200ApplicationJsonParticipants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListWebinarParticipants200ApplicationJsonParticipants.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], ListWebinarParticipants200ApplicationJsonParticipants.prototype, "userEmail", void 0);
    return ListWebinarParticipants200ApplicationJsonParticipants;
}(utils_1.SpeakeasyBase));
exports.ListWebinarParticipants200ApplicationJsonParticipants = ListWebinarParticipants200ApplicationJsonParticipants;
var ListWebinarParticipants200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListWebinarParticipants200ApplicationJson, _super);
    function ListWebinarParticipants200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListWebinarParticipants200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], ListWebinarParticipants200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWebinarParticipants200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: ListWebinarParticipants200ApplicationJsonParticipants }),
        __metadata("design:type", Array)
    ], ListWebinarParticipants200ApplicationJson.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListWebinarParticipants200ApplicationJson.prototype, "totalRecords", void 0);
    return ListWebinarParticipants200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListWebinarParticipants200ApplicationJson = ListWebinarParticipants200ApplicationJson;
var ListWebinarParticipantsRequest = /** @class */ (function (_super) {
    __extends(ListWebinarParticipantsRequest, _super);
    function ListWebinarParticipantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWebinarParticipantsPathParams)
    ], ListWebinarParticipantsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWebinarParticipantsQueryParams)
    ], ListWebinarParticipantsRequest.prototype, "queryParams", void 0);
    return ListWebinarParticipantsRequest;
}(utils_1.SpeakeasyBase));
exports.ListWebinarParticipantsRequest = ListWebinarParticipantsRequest;
var ListWebinarParticipantsResponse = /** @class */ (function (_super) {
    __extends(ListWebinarParticipantsResponse, _super);
    function ListWebinarParticipantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListWebinarParticipantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListWebinarParticipantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListWebinarParticipantsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWebinarParticipants200ApplicationJson)
    ], ListWebinarParticipantsResponse.prototype, "listWebinarParticipants200ApplicationJSONObject", void 0);
    return ListWebinarParticipantsResponse;
}(utils_1.SpeakeasyBase));
exports.ListWebinarParticipantsResponse = ListWebinarParticipantsResponse;
