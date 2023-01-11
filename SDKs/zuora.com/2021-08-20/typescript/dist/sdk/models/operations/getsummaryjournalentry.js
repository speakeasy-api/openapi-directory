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
exports.GetSummaryJournalEntryResponse = exports.GetSummaryJournalEntryRequest = exports.GetSummaryJournalEntryHeaders = exports.GetSummaryJournalEntryPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetSummaryJournalEntryPathParams = /** @class */ (function (_super) {
    __extends(GetSummaryJournalEntryPathParams, _super);
    function GetSummaryJournalEntryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=je-number" }),
        __metadata("design:type", String)
    ], GetSummaryJournalEntryPathParams.prototype, "jeNumber", void 0);
    return GetSummaryJournalEntryPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSummaryJournalEntryPathParams = GetSummaryJournalEntryPathParams;
var GetSummaryJournalEntryHeaders = /** @class */ (function (_super) {
    __extends(GetSummaryJournalEntryHeaders, _super);
    function GetSummaryJournalEntryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetSummaryJournalEntryHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetSummaryJournalEntryHeaders.prototype, "zuoraTrackId", void 0);
    return GetSummaryJournalEntryHeaders;
}(utils_1.SpeakeasyBase));
exports.GetSummaryJournalEntryHeaders = GetSummaryJournalEntryHeaders;
var GetSummaryJournalEntryRequest = /** @class */ (function (_super) {
    __extends(GetSummaryJournalEntryRequest, _super);
    function GetSummaryJournalEntryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSummaryJournalEntryPathParams)
    ], GetSummaryJournalEntryRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSummaryJournalEntryHeaders)
    ], GetSummaryJournalEntryRequest.prototype, "headers", void 0);
    return GetSummaryJournalEntryRequest;
}(utils_1.SpeakeasyBase));
exports.GetSummaryJournalEntryRequest = GetSummaryJournalEntryRequest;
var GetSummaryJournalEntryResponse = /** @class */ (function (_super) {
    __extends(GetSummaryJournalEntryResponse, _super);
    function GetSummaryJournalEntryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSummaryJournalEntryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSummaryJournalEntryResponse.prototype, "getJournalEntryDetailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSummaryJournalEntryResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSummaryJournalEntryResponse.prototype, "statusCode", void 0);
    return GetSummaryJournalEntryResponse;
}(utils_1.SpeakeasyBase));
exports.GetSummaryJournalEntryResponse = GetSummaryJournalEntryResponse;
