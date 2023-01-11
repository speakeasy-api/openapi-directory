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
exports.ReleaseEventSeriesApiDeleteResponse = exports.ReleaseEventSeriesApiDeleteRequest = exports.ReleaseEventSeriesApiDeleteQueryParams = exports.ReleaseEventSeriesApiDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ReleaseEventSeriesApiDeletePathParams = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiDeletePathParams, _super);
    function ReleaseEventSeriesApiDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesApiDeletePathParams.prototype, "id", void 0);
    return ReleaseEventSeriesApiDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventSeriesApiDeletePathParams = ReleaseEventSeriesApiDeletePathParams;
var ReleaseEventSeriesApiDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiDeleteQueryParams, _super);
    function ReleaseEventSeriesApiDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hardDelete" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventSeriesApiDeleteQueryParams.prototype, "hardDelete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=notes" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesApiDeleteQueryParams.prototype, "notes", void 0);
    return ReleaseEventSeriesApiDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventSeriesApiDeleteQueryParams = ReleaseEventSeriesApiDeleteQueryParams;
var ReleaseEventSeriesApiDeleteRequest = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiDeleteRequest, _super);
    function ReleaseEventSeriesApiDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReleaseEventSeriesApiDeletePathParams)
    ], ReleaseEventSeriesApiDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReleaseEventSeriesApiDeleteQueryParams)
    ], ReleaseEventSeriesApiDeleteRequest.prototype, "queryParams", void 0);
    return ReleaseEventSeriesApiDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventSeriesApiDeleteRequest = ReleaseEventSeriesApiDeleteRequest;
var ReleaseEventSeriesApiDeleteResponse = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiDeleteResponse, _super);
    function ReleaseEventSeriesApiDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReleaseEventSeriesApiDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesApiDeleteResponse.prototype, "statusCode", void 0);
    return ReleaseEventSeriesApiDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventSeriesApiDeleteResponse = ReleaseEventSeriesApiDeleteResponse;
