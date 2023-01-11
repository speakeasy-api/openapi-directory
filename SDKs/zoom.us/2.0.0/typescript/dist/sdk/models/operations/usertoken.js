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
exports.UserTokenResponse = exports.UserTokenRequest = exports.UserToken200ApplicationJson = exports.UserTokenSecurity = exports.UserTokenQueryParams = exports.UserTokenTypeEnum = exports.UserTokenPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserTokenPathParams = /** @class */ (function (_super) {
    __extends(UserTokenPathParams, _super);
    function UserTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserTokenPathParams.prototype, "userId", void 0);
    return UserTokenPathParams;
}(utils_1.SpeakeasyBase));
exports.UserTokenPathParams = UserTokenPathParams;
var UserTokenTypeEnum;
(function (UserTokenTypeEnum) {
    UserTokenTypeEnum["Token"] = "token";
    UserTokenTypeEnum["Zak"] = "zak";
})(UserTokenTypeEnum = exports.UserTokenTypeEnum || (exports.UserTokenTypeEnum = {}));
var UserTokenQueryParams = /** @class */ (function (_super) {
    __extends(UserTokenQueryParams, _super);
    function UserTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ttl" }),
        __metadata("design:type", Number)
    ], UserTokenQueryParams.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], UserTokenQueryParams.prototype, "type", void 0);
    return UserTokenQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserTokenQueryParams = UserTokenQueryParams;
var UserTokenSecurity = /** @class */ (function (_super) {
    __extends(UserTokenSecurity, _super);
    function UserTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UserTokenSecurity.prototype, "oAuth", void 0);
    return UserTokenSecurity;
}(utils_1.SpeakeasyBase));
exports.UserTokenSecurity = UserTokenSecurity;
var UserToken200ApplicationJson = /** @class */ (function (_super) {
    __extends(UserToken200ApplicationJson, _super);
    function UserToken200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], UserToken200ApplicationJson.prototype, "token", void 0);
    return UserToken200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UserToken200ApplicationJson = UserToken200ApplicationJson;
var UserTokenRequest = /** @class */ (function (_super) {
    __extends(UserTokenRequest, _super);
    function UserTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserTokenPathParams)
    ], UserTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserTokenQueryParams)
    ], UserTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserTokenSecurity)
    ], UserTokenRequest.prototype, "security", void 0);
    return UserTokenRequest;
}(utils_1.SpeakeasyBase));
exports.UserTokenRequest = UserTokenRequest;
var UserTokenResponse = /** @class */ (function (_super) {
    __extends(UserTokenResponse, _super);
    function UserTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserTokenResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserTokenResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserToken200ApplicationJson)
    ], UserTokenResponse.prototype, "userToken200ApplicationJSONObject", void 0);
    return UserTokenResponse;
}(utils_1.SpeakeasyBase));
exports.UserTokenResponse = UserTokenResponse;
