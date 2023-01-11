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
exports.Play = exports.PlayStatusEnum = exports.PlayProgressive = exports.PlayProgressiveTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PlayProgressiveTypeEnum;
(function (PlayProgressiveTypeEnum) {
    PlayProgressiveTypeEnum["Source"] = "source";
    PlayProgressiveTypeEnum["VideoMp4"] = "video/mp4";
    PlayProgressiveTypeEnum["VideoWebm"] = "video/webm";
    PlayProgressiveTypeEnum["Vp6XVideo"] = "vp6/x-video";
})(PlayProgressiveTypeEnum = exports.PlayProgressiveTypeEnum || (exports.PlayProgressiveTypeEnum = {}));
var PlayProgressive = /** @class */ (function (_super) {
    __extends(PlayProgressive, _super);
    function PlayProgressive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], PlayProgressive.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fps" }),
        __metadata("design:type", Number)
    ], PlayProgressive.prototype, "fps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], PlayProgressive.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], PlayProgressive.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link_expiration_time" }),
        __metadata("design:type", String)
    ], PlayProgressive.prototype, "linkExpirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=log" }),
        __metadata("design:type", Object)
    ], PlayProgressive.prototype, "log", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=md5" }),
        __metadata("design:type", String)
    ], PlayProgressive.prototype, "md5", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PlayProgressive.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PlayProgressive.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], PlayProgressive.prototype, "width", void 0);
    return PlayProgressive;
}(utils_1.SpeakeasyBase));
exports.PlayProgressive = PlayProgressive;
var PlayStatusEnum;
(function (PlayStatusEnum) {
    PlayStatusEnum["Playable"] = "playable";
    PlayStatusEnum["PurchaseRequired"] = "purchase_required";
    PlayStatusEnum["Restricted"] = "restricted";
    PlayStatusEnum["Unavailable"] = "unavailable";
})(PlayStatusEnum = exports.PlayStatusEnum || (exports.PlayStatusEnum = {}));
var Play = /** @class */ (function (_super) {
    __extends(Play, _super);
    function Play() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progressive", elemType: PlayProgressive }),
        __metadata("design:type", Array)
    ], Play.prototype, "progressive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Play.prototype, "status", void 0);
    return Play;
}(utils_1.SpeakeasyBase));
exports.Play = Play;
