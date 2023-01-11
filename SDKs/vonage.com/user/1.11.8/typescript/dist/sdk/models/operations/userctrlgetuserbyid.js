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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCtrlGetUserByIdResponse = exports.UserCtrlGetUserByIdRequest = exports.UserCtrlGetUserByIdSecurity = exports.UserCtrlGetUserByIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserCtrlGetUserByIdPathParams = /** @class */ (function (_super) {
    __extends(UserCtrlGetUserByIdPathParams, _super);
    function UserCtrlGetUserByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=account_id" }),
        __metadata("design:type", String)
    ], UserCtrlGetUserByIdPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], UserCtrlGetUserByIdPathParams.prototype, "userId", void 0);
    return UserCtrlGetUserByIdPathParams;
}(utils_1.SpeakeasyBase));
exports.UserCtrlGetUserByIdPathParams = UserCtrlGetUserByIdPathParams;
var UserCtrlGetUserByIdSecurity = /** @class */ (function (_super) {
    __extends(UserCtrlGetUserByIdSecurity, _super);
    function UserCtrlGetUserByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], UserCtrlGetUserByIdSecurity.prototype, "bearerAuth", void 0);
    return UserCtrlGetUserByIdSecurity;
}(utils_1.SpeakeasyBase));
exports.UserCtrlGetUserByIdSecurity = UserCtrlGetUserByIdSecurity;
var UserCtrlGetUserByIdRequest = /** @class */ (function (_super) {
    __extends(UserCtrlGetUserByIdRequest, _super);
    function UserCtrlGetUserByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserCtrlGetUserByIdPathParams)
    ], UserCtrlGetUserByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserCtrlGetUserByIdSecurity)
    ], UserCtrlGetUserByIdRequest.prototype, "security", void 0);
    return UserCtrlGetUserByIdRequest;
}(utils_1.SpeakeasyBase));
exports.UserCtrlGetUserByIdRequest = UserCtrlGetUserByIdRequest;
var UserCtrlGetUserByIdResponse = /** @class */ (function (_super) {
    __extends(UserCtrlGetUserByIdResponse, _super);
    function UserCtrlGetUserByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserCtrlGetUserByIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], UserCtrlGetUserByIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserCtrlGetUserByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UserHalResponse)
    ], UserCtrlGetUserByIdResponse.prototype, "userHalResponse", void 0);
    return UserCtrlGetUserByIdResponse;
}(utils_1.SpeakeasyBase));
exports.UserCtrlGetUserByIdResponse = UserCtrlGetUserByIdResponse;
