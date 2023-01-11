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
exports.TagApiDeleteResponse = exports.TagApiDeleteRequest = exports.TagApiDeleteQueryParams = exports.TagApiDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var TagApiDeletePathParams = /** @class */ (function (_super) {
    __extends(TagApiDeletePathParams, _super);
    function TagApiDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], TagApiDeletePathParams.prototype, "id", void 0);
    return TagApiDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.TagApiDeletePathParams = TagApiDeletePathParams;
var TagApiDeleteQueryParams = /** @class */ (function (_super) {
    __extends(TagApiDeleteQueryParams, _super);
    function TagApiDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hardDelete" }),
        __metadata("design:type", Boolean)
    ], TagApiDeleteQueryParams.prototype, "hardDelete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=notes" }),
        __metadata("design:type", String)
    ], TagApiDeleteQueryParams.prototype, "notes", void 0);
    return TagApiDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.TagApiDeleteQueryParams = TagApiDeleteQueryParams;
var TagApiDeleteRequest = /** @class */ (function (_super) {
    __extends(TagApiDeleteRequest, _super);
    function TagApiDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TagApiDeletePathParams)
    ], TagApiDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TagApiDeleteQueryParams)
    ], TagApiDeleteRequest.prototype, "queryParams", void 0);
    return TagApiDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.TagApiDeleteRequest = TagApiDeleteRequest;
var TagApiDeleteResponse = /** @class */ (function (_super) {
    __extends(TagApiDeleteResponse, _super);
    function TagApiDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TagApiDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TagApiDeleteResponse.prototype, "statusCode", void 0);
    return TagApiDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.TagApiDeleteResponse = TagApiDeleteResponse;
