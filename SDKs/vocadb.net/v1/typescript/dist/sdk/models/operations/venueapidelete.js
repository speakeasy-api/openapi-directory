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
exports.VenueApiDeleteResponse = exports.VenueApiDeleteRequest = exports.VenueApiDeleteQueryParams = exports.VenueApiDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var VenueApiDeletePathParams = /** @class */ (function (_super) {
    __extends(VenueApiDeletePathParams, _super);
    function VenueApiDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], VenueApiDeletePathParams.prototype, "id", void 0);
    return VenueApiDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.VenueApiDeletePathParams = VenueApiDeletePathParams;
var VenueApiDeleteQueryParams = /** @class */ (function (_super) {
    __extends(VenueApiDeleteQueryParams, _super);
    function VenueApiDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hardDelete" }),
        __metadata("design:type", Boolean)
    ], VenueApiDeleteQueryParams.prototype, "hardDelete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=notes" }),
        __metadata("design:type", String)
    ], VenueApiDeleteQueryParams.prototype, "notes", void 0);
    return VenueApiDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.VenueApiDeleteQueryParams = VenueApiDeleteQueryParams;
var VenueApiDeleteRequest = /** @class */ (function (_super) {
    __extends(VenueApiDeleteRequest, _super);
    function VenueApiDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VenueApiDeletePathParams)
    ], VenueApiDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VenueApiDeleteQueryParams)
    ], VenueApiDeleteRequest.prototype, "queryParams", void 0);
    return VenueApiDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.VenueApiDeleteRequest = VenueApiDeleteRequest;
var VenueApiDeleteResponse = /** @class */ (function (_super) {
    __extends(VenueApiDeleteResponse, _super);
    function VenueApiDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], VenueApiDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], VenueApiDeleteResponse.prototype, "statusCode", void 0);
    return VenueApiDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.VenueApiDeleteResponse = VenueApiDeleteResponse;
