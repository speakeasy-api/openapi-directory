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
exports.AuthenticateResponse = exports.AuthenticateRequest = exports.AuthenticateQueryParams = exports.AuthenticatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AuthenticatePathParams = /** @class */ (function (_super) {
    __extends(AuthenticatePathParams, _super);
    function AuthenticatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], AuthenticatePathParams.prototype, "username", void 0);
    return AuthenticatePathParams;
}(utils_1.SpeakeasyBase));
exports.AuthenticatePathParams = AuthenticatePathParams;
var AuthenticateQueryParams = /** @class */ (function (_super) {
    __extends(AuthenticateQueryParams, _super);
    function AuthenticateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=password" }),
        __metadata("design:type", String)
    ], AuthenticateQueryParams.prototype, "password", void 0);
    return AuthenticateQueryParams;
}(utils_1.SpeakeasyBase));
exports.AuthenticateQueryParams = AuthenticateQueryParams;
var AuthenticateRequest = /** @class */ (function (_super) {
    __extends(AuthenticateRequest, _super);
    function AuthenticateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AuthenticatePathParams)
    ], AuthenticateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AuthenticateQueryParams)
    ], AuthenticateRequest.prototype, "queryParams", void 0);
    return AuthenticateRequest;
}(utils_1.SpeakeasyBase));
exports.AuthenticateRequest = AuthenticateRequest;
var AuthenticateResponse = /** @class */ (function (_super) {
    __extends(AuthenticateResponse, _super);
    function AuthenticateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AuthenticateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AuthenticateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AuthenticateResponse.prototype, "statusCode", void 0);
    return AuthenticateResponse;
}(utils_1.SpeakeasyBase));
exports.AuthenticateResponse = AuthenticateResponse;
