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
exports.UserSchedulersResponse = exports.UserSchedulersRequest = exports.UserSchedulersUserSchedulersList = exports.UserSchedulersUserSchedulersListSchedulers = exports.UserSchedulersSecurity = exports.UserSchedulersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserSchedulersPathParams = /** @class */ (function (_super) {
    __extends(UserSchedulersPathParams, _super);
    function UserSchedulersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserSchedulersPathParams.prototype, "userId", void 0);
    return UserSchedulersPathParams;
}(utils_1.SpeakeasyBase));
exports.UserSchedulersPathParams = UserSchedulersPathParams;
var UserSchedulersSecurity = /** @class */ (function (_super) {
    __extends(UserSchedulersSecurity, _super);
    function UserSchedulersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UserSchedulersSecurity.prototype, "oAuth", void 0);
    return UserSchedulersSecurity;
}(utils_1.SpeakeasyBase));
exports.UserSchedulersSecurity = UserSchedulersSecurity;
var UserSchedulersUserSchedulersListSchedulers = /** @class */ (function (_super) {
    __extends(UserSchedulersUserSchedulersListSchedulers, _super);
    function UserSchedulersUserSchedulersListSchedulers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserSchedulersUserSchedulersListSchedulers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserSchedulersUserSchedulersListSchedulers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi" }),
        __metadata("design:type", Number)
    ], UserSchedulersUserSchedulersListSchedulers.prototype, "pmi", void 0);
    return UserSchedulersUserSchedulersListSchedulers;
}(utils_1.SpeakeasyBase));
exports.UserSchedulersUserSchedulersListSchedulers = UserSchedulersUserSchedulersListSchedulers;
// UserSchedulersUserSchedulersList
/**
 * List of user's schedulers.
**/
var UserSchedulersUserSchedulersList = /** @class */ (function (_super) {
    __extends(UserSchedulersUserSchedulersList, _super);
    function UserSchedulersUserSchedulersList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedulers", elemType: UserSchedulersUserSchedulersListSchedulers }),
        __metadata("design:type", Array)
    ], UserSchedulersUserSchedulersList.prototype, "schedulers", void 0);
    return UserSchedulersUserSchedulersList;
}(utils_1.SpeakeasyBase));
exports.UserSchedulersUserSchedulersList = UserSchedulersUserSchedulersList;
var UserSchedulersRequest = /** @class */ (function (_super) {
    __extends(UserSchedulersRequest, _super);
    function UserSchedulersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserSchedulersPathParams)
    ], UserSchedulersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserSchedulersSecurity)
    ], UserSchedulersRequest.prototype, "security", void 0);
    return UserSchedulersRequest;
}(utils_1.SpeakeasyBase));
exports.UserSchedulersRequest = UserSchedulersRequest;
var UserSchedulersResponse = /** @class */ (function (_super) {
    __extends(UserSchedulersResponse, _super);
    function UserSchedulersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserSchedulersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserSchedulersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserSchedulersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserSchedulersUserSchedulersList)
    ], UserSchedulersResponse.prototype, "userSchedulersList", void 0);
    return UserSchedulersResponse;
}(utils_1.SpeakeasyBase));
exports.UserSchedulersResponse = UserSchedulersResponse;
