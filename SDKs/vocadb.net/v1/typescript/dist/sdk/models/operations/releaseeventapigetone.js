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
exports.ReleaseEventApiGetOneResponse = exports.ReleaseEventApiGetOneRequest = exports.ReleaseEventApiGetOneQueryParams = exports.ReleaseEventApiGetOneLangEnum = exports.ReleaseEventApiGetOneFieldsEnum = exports.ReleaseEventApiGetOnePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReleaseEventApiGetOnePathParams = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetOnePathParams, _super);
    function ReleaseEventApiGetOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetOnePathParams.prototype, "id", void 0);
    return ReleaseEventApiGetOnePathParams;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventApiGetOnePathParams = ReleaseEventApiGetOnePathParams;
var ReleaseEventApiGetOneFieldsEnum;
(function (ReleaseEventApiGetOneFieldsEnum) {
    ReleaseEventApiGetOneFieldsEnum["None"] = "None";
    ReleaseEventApiGetOneFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ReleaseEventApiGetOneFieldsEnum["Artists"] = "Artists";
    ReleaseEventApiGetOneFieldsEnum["Description"] = "Description";
    ReleaseEventApiGetOneFieldsEnum["MainPicture"] = "MainPicture";
    ReleaseEventApiGetOneFieldsEnum["Names"] = "Names";
    ReleaseEventApiGetOneFieldsEnum["Series"] = "Series";
    ReleaseEventApiGetOneFieldsEnum["SongList"] = "SongList";
    ReleaseEventApiGetOneFieldsEnum["Tags"] = "Tags";
    ReleaseEventApiGetOneFieldsEnum["Venue"] = "Venue";
    ReleaseEventApiGetOneFieldsEnum["WebLinks"] = "WebLinks";
})(ReleaseEventApiGetOneFieldsEnum = exports.ReleaseEventApiGetOneFieldsEnum || (exports.ReleaseEventApiGetOneFieldsEnum = {}));
var ReleaseEventApiGetOneLangEnum;
(function (ReleaseEventApiGetOneLangEnum) {
    ReleaseEventApiGetOneLangEnum["Default"] = "Default";
    ReleaseEventApiGetOneLangEnum["Japanese"] = "Japanese";
    ReleaseEventApiGetOneLangEnum["Romaji"] = "Romaji";
    ReleaseEventApiGetOneLangEnum["English"] = "English";
})(ReleaseEventApiGetOneLangEnum = exports.ReleaseEventApiGetOneLangEnum || (exports.ReleaseEventApiGetOneLangEnum = {}));
var ReleaseEventApiGetOneQueryParams = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetOneQueryParams, _super);
    function ReleaseEventApiGetOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetOneQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetOneQueryParams.prototype, "lang", void 0);
    return ReleaseEventApiGetOneQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventApiGetOneQueryParams = ReleaseEventApiGetOneQueryParams;
var ReleaseEventApiGetOneRequest = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetOneRequest, _super);
    function ReleaseEventApiGetOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReleaseEventApiGetOnePathParams)
    ], ReleaseEventApiGetOneRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReleaseEventApiGetOneQueryParams)
    ], ReleaseEventApiGetOneRequest.prototype, "queryParams", void 0);
    return ReleaseEventApiGetOneRequest;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventApiGetOneRequest = ReleaseEventApiGetOneRequest;
var ReleaseEventApiGetOneResponse = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetOneResponse, _super);
    function ReleaseEventApiGetOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReleaseEventApiGetOneResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReleaseEventApiGetOneResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ReleaseEventForApiContract)
    ], ReleaseEventApiGetOneResponse.prototype, "releaseEventForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetOneResponse.prototype, "statusCode", void 0);
    return ReleaseEventApiGetOneResponse;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventApiGetOneResponse = ReleaseEventApiGetOneResponse;
