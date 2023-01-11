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
exports.AssignPhoneNumberResponse = exports.AssignPhoneNumberRequest = exports.AssignPhoneNumber200ApplicationJson = exports.AssignPhoneNumber200ApplicationJsonPhoneNumbers = exports.AssignPhoneNumberSecurity = exports.AssignPhoneNumberRequests = exports.AssignPhoneNumberMultipartFormData1 = exports.AssignPhoneNumberMultipartFormDataPhoneNumbers = exports.AssignPhoneNumberApplicationJson = exports.AssignPhoneNumberApplicationJsonPhoneNumbers = exports.AssignPhoneNumberPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AssignPhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(AssignPhoneNumberPathParams, _super);
    function AssignPhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AssignPhoneNumberPathParams.prototype, "userId", void 0);
    return AssignPhoneNumberPathParams;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumberPathParams = AssignPhoneNumberPathParams;
var AssignPhoneNumberApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(AssignPhoneNumberApplicationJsonPhoneNumbers, _super);
    function AssignPhoneNumberApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignPhoneNumberApplicationJsonPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AssignPhoneNumberApplicationJsonPhoneNumbers.prototype, "number", void 0);
    return AssignPhoneNumberApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumberApplicationJsonPhoneNumbers = AssignPhoneNumberApplicationJsonPhoneNumbers;
var AssignPhoneNumberApplicationJson = /** @class */ (function (_super) {
    __extends(AssignPhoneNumberApplicationJson, _super);
    function AssignPhoneNumberApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: AssignPhoneNumberApplicationJsonPhoneNumbers }),
        __metadata("design:type", Array)
    ], AssignPhoneNumberApplicationJson.prototype, "phoneNumbers", void 0);
    return AssignPhoneNumberApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumberApplicationJson = AssignPhoneNumberApplicationJson;
var AssignPhoneNumberMultipartFormDataPhoneNumbers = /** @class */ (function (_super) {
    __extends(AssignPhoneNumberMultipartFormDataPhoneNumbers, _super);
    function AssignPhoneNumberMultipartFormDataPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignPhoneNumberMultipartFormDataPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AssignPhoneNumberMultipartFormDataPhoneNumbers.prototype, "number", void 0);
    return AssignPhoneNumberMultipartFormDataPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumberMultipartFormDataPhoneNumbers = AssignPhoneNumberMultipartFormDataPhoneNumbers;
var AssignPhoneNumberMultipartFormData1 = /** @class */ (function (_super) {
    __extends(AssignPhoneNumberMultipartFormData1, _super);
    function AssignPhoneNumberMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_numbers;json=true", elemType: AssignPhoneNumberMultipartFormDataPhoneNumbers }),
        __metadata("design:type", Array)
    ], AssignPhoneNumberMultipartFormData1.prototype, "phoneNumbers", void 0);
    return AssignPhoneNumberMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumberMultipartFormData1 = AssignPhoneNumberMultipartFormData1;
var AssignPhoneNumberRequests = /** @class */ (function (_super) {
    __extends(AssignPhoneNumberRequests, _super);
    function AssignPhoneNumberRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssignPhoneNumberApplicationJson)
    ], AssignPhoneNumberRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AssignPhoneNumberMultipartFormData1)
    ], AssignPhoneNumberRequests.prototype, "object1", void 0);
    return AssignPhoneNumberRequests;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumberRequests = AssignPhoneNumberRequests;
var AssignPhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(AssignPhoneNumberSecurity, _super);
    function AssignPhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AssignPhoneNumberSecurity.prototype, "oAuth", void 0);
    return AssignPhoneNumberSecurity;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumberSecurity = AssignPhoneNumberSecurity;
var AssignPhoneNumber200ApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(AssignPhoneNumber200ApplicationJsonPhoneNumbers, _super);
    function AssignPhoneNumber200ApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignPhoneNumber200ApplicationJsonPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AssignPhoneNumber200ApplicationJsonPhoneNumbers.prototype, "number", void 0);
    return AssignPhoneNumber200ApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumber200ApplicationJsonPhoneNumbers = AssignPhoneNumber200ApplicationJsonPhoneNumbers;
var AssignPhoneNumber200ApplicationJson = /** @class */ (function (_super) {
    __extends(AssignPhoneNumber200ApplicationJson, _super);
    function AssignPhoneNumber200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: AssignPhoneNumber200ApplicationJsonPhoneNumbers }),
        __metadata("design:type", Array)
    ], AssignPhoneNumber200ApplicationJson.prototype, "phoneNumbers", void 0);
    return AssignPhoneNumber200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumber200ApplicationJson = AssignPhoneNumber200ApplicationJson;
var AssignPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(AssignPhoneNumberRequest, _super);
    function AssignPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignPhoneNumberPathParams)
    ], AssignPhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignPhoneNumberRequests)
    ], AssignPhoneNumberRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignPhoneNumberSecurity)
    ], AssignPhoneNumberRequest.prototype, "security", void 0);
    return AssignPhoneNumberRequest;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumberRequest = AssignPhoneNumberRequest;
var AssignPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(AssignPhoneNumberResponse, _super);
    function AssignPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AssignPhoneNumberResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AssignPhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AssignPhoneNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignPhoneNumber200ApplicationJson)
    ], AssignPhoneNumberResponse.prototype, "assignPhoneNumber200ApplicationJSONObject", void 0);
    return AssignPhoneNumberResponse;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumberResponse = AssignPhoneNumberResponse;
