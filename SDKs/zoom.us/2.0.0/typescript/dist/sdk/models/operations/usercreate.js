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
exports.UserCreateResponse = exports.UserCreateRequest = exports.UserCreate201ApplicationJson = exports.UserCreateSecurity = exports.UserCreateRequests = exports.UserCreateMultipartFormData = exports.UserCreateMultipartFormDataUserInfo = exports.UserCreateMultipartFormDataActionEnum = exports.UserCreateApplicationJson = exports.UserCreateApplicationJsonUserInfo = exports.UserCreateApplicationJsonActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserCreateApplicationJsonActionEnum;
(function (UserCreateApplicationJsonActionEnum) {
    UserCreateApplicationJsonActionEnum["Create"] = "create";
    UserCreateApplicationJsonActionEnum["AutoCreate"] = "autoCreate";
    UserCreateApplicationJsonActionEnum["CustCreate"] = "custCreate";
    UserCreateApplicationJsonActionEnum["SsoCreate"] = "ssoCreate";
})(UserCreateApplicationJsonActionEnum = exports.UserCreateApplicationJsonActionEnum || (exports.UserCreateApplicationJsonActionEnum = {}));
var UserCreateApplicationJsonUserInfo = /** @class */ (function (_super) {
    __extends(UserCreateApplicationJsonUserInfo, _super);
    function UserCreateApplicationJsonUserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserCreateApplicationJsonUserInfo.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], UserCreateApplicationJsonUserInfo.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], UserCreateApplicationJsonUserInfo.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UserCreateApplicationJsonUserInfo.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], UserCreateApplicationJsonUserInfo.prototype, "type", void 0);
    return UserCreateApplicationJsonUserInfo;
}(utils_1.SpeakeasyBase));
exports.UserCreateApplicationJsonUserInfo = UserCreateApplicationJsonUserInfo;
var UserCreateApplicationJson = /** @class */ (function (_super) {
    __extends(UserCreateApplicationJson, _super);
    function UserCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UserCreateApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_info" }),
        __metadata("design:type", UserCreateApplicationJsonUserInfo)
    ], UserCreateApplicationJson.prototype, "userInfo", void 0);
    return UserCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UserCreateApplicationJson = UserCreateApplicationJson;
var UserCreateMultipartFormDataActionEnum;
(function (UserCreateMultipartFormDataActionEnum) {
    UserCreateMultipartFormDataActionEnum["Create"] = "create";
    UserCreateMultipartFormDataActionEnum["AutoCreate"] = "autoCreate";
    UserCreateMultipartFormDataActionEnum["CustCreate"] = "custCreate";
    UserCreateMultipartFormDataActionEnum["SsoCreate"] = "ssoCreate";
})(UserCreateMultipartFormDataActionEnum = exports.UserCreateMultipartFormDataActionEnum || (exports.UserCreateMultipartFormDataActionEnum = {}));
var UserCreateMultipartFormDataUserInfo = /** @class */ (function (_super) {
    __extends(UserCreateMultipartFormDataUserInfo, _super);
    function UserCreateMultipartFormDataUserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserCreateMultipartFormDataUserInfo.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], UserCreateMultipartFormDataUserInfo.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], UserCreateMultipartFormDataUserInfo.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UserCreateMultipartFormDataUserInfo.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], UserCreateMultipartFormDataUserInfo.prototype, "type", void 0);
    return UserCreateMultipartFormDataUserInfo;
}(utils_1.SpeakeasyBase));
exports.UserCreateMultipartFormDataUserInfo = UserCreateMultipartFormDataUserInfo;
var UserCreateMultipartFormData = /** @class */ (function (_super) {
    __extends(UserCreateMultipartFormData, _super);
    function UserCreateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], UserCreateMultipartFormData.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=user_info;json=true" }),
        __metadata("design:type", UserCreateMultipartFormDataUserInfo)
    ], UserCreateMultipartFormData.prototype, "userInfo", void 0);
    return UserCreateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UserCreateMultipartFormData = UserCreateMultipartFormData;
var UserCreateRequests = /** @class */ (function (_super) {
    __extends(UserCreateRequests, _super);
    function UserCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UserCreateApplicationJson)
    ], UserCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UserCreateMultipartFormData)
    ], UserCreateRequests.prototype, "object1", void 0);
    return UserCreateRequests;
}(utils_1.SpeakeasyBase));
exports.UserCreateRequests = UserCreateRequests;
var UserCreateSecurity = /** @class */ (function (_super) {
    __extends(UserCreateSecurity, _super);
    function UserCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UserCreateSecurity.prototype, "oAuth", void 0);
    return UserCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.UserCreateSecurity = UserCreateSecurity;
var UserCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(UserCreate201ApplicationJson, _super);
    function UserCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserCreate201ApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], UserCreate201ApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserCreate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], UserCreate201ApplicationJson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], UserCreate201ApplicationJson.prototype, "type", void 0);
    return UserCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UserCreate201ApplicationJson = UserCreate201ApplicationJson;
var UserCreateRequest = /** @class */ (function (_super) {
    __extends(UserCreateRequest, _super);
    function UserCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserCreateRequests)
    ], UserCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserCreateSecurity)
    ], UserCreateRequest.prototype, "security", void 0);
    return UserCreateRequest;
}(utils_1.SpeakeasyBase));
exports.UserCreateRequest = UserCreateRequest;
var UserCreateResponse = /** @class */ (function (_super) {
    __extends(UserCreateResponse, _super);
    function UserCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UserCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserCreate201ApplicationJson)
    ], UserCreateResponse.prototype, "userCreate201ApplicationJSONObject", void 0);
    return UserCreateResponse;
}(utils_1.SpeakeasyBase));
exports.UserCreateResponse = UserCreateResponse;
