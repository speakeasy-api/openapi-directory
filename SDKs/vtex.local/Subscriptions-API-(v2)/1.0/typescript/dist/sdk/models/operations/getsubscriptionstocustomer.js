"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GetsubscriptionstocustomerResponse = exports.GetsubscriptionstocustomerRequest = void 0;
var utils_1 = require("../../../internal/utils");
var GetsubscriptionstocustomerRequest = /** @class */ (function (_super) {
    __extends(GetsubscriptionstocustomerRequest, _super);
    function GetsubscriptionstocustomerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetsubscriptionstocustomerRequest.prototype, "accept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=Content-Type",
        }),
        __metadata("design:type", String)
    ], GetsubscriptionstocustomerRequest.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=customerId",
        }),
        __metadata("design:type", String)
    ], GetsubscriptionstocustomerRequest.prototype, "customerId", void 0);
    return GetsubscriptionstocustomerRequest;
}(utils_1.SpeakeasyBase));
exports.GetsubscriptionstocustomerRequest = GetsubscriptionstocustomerRequest;
var GetsubscriptionstocustomerResponse = /** @class */ (function (_super) {
    __extends(GetsubscriptionstocustomerResponse, _super);
    function GetsubscriptionstocustomerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetsubscriptionstocustomerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetsubscriptionstocustomerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetsubscriptionstocustomerResponse.prototype, "rawResponse", void 0);
    return GetsubscriptionstocustomerResponse;
}(utils_1.SpeakeasyBase));
exports.GetsubscriptionstocustomerResponse = GetsubscriptionstocustomerResponse;
