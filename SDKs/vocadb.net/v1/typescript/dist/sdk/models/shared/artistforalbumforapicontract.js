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
exports.ArtistForAlbumForApiContract = exports.ArtistForAlbumForApiContractRolesEnum = exports.ArtistForAlbumForApiContractEffectiveRolesEnum = exports.ArtistForAlbumForApiContractCategoriesEnum = void 0;
var utils_1 = require("../../../internal/utils");
var artistcontract_1 = require("./artistcontract");
var ArtistForAlbumForApiContractCategoriesEnum;
(function (ArtistForAlbumForApiContractCategoriesEnum) {
    ArtistForAlbumForApiContractCategoriesEnum["Nothing"] = "Nothing";
    ArtistForAlbumForApiContractCategoriesEnum["Vocalist"] = "Vocalist";
    ArtistForAlbumForApiContractCategoriesEnum["Producer"] = "Producer";
    ArtistForAlbumForApiContractCategoriesEnum["Animator"] = "Animator";
    ArtistForAlbumForApiContractCategoriesEnum["Label"] = "Label";
    ArtistForAlbumForApiContractCategoriesEnum["Circle"] = "Circle";
    ArtistForAlbumForApiContractCategoriesEnum["Other"] = "Other";
    ArtistForAlbumForApiContractCategoriesEnum["Band"] = "Band";
    ArtistForAlbumForApiContractCategoriesEnum["Illustrator"] = "Illustrator";
    ArtistForAlbumForApiContractCategoriesEnum["Subject"] = "Subject";
})(ArtistForAlbumForApiContractCategoriesEnum = exports.ArtistForAlbumForApiContractCategoriesEnum || (exports.ArtistForAlbumForApiContractCategoriesEnum = {}));
var ArtistForAlbumForApiContractEffectiveRolesEnum;
(function (ArtistForAlbumForApiContractEffectiveRolesEnum) {
    ArtistForAlbumForApiContractEffectiveRolesEnum["Default"] = "Default";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Animator"] = "Animator";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Arranger"] = "Arranger";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Composer"] = "Composer";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Distributor"] = "Distributor";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Illustrator"] = "Illustrator";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Instrumentalist"] = "Instrumentalist";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Lyricist"] = "Lyricist";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Mastering"] = "Mastering";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Publisher"] = "Publisher";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Vocalist"] = "Vocalist";
    ArtistForAlbumForApiContractEffectiveRolesEnum["VoiceManipulator"] = "VoiceManipulator";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Other"] = "Other";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Mixer"] = "Mixer";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Chorus"] = "Chorus";
    ArtistForAlbumForApiContractEffectiveRolesEnum["Encoder"] = "Encoder";
    ArtistForAlbumForApiContractEffectiveRolesEnum["VocalDataProvider"] = "VocalDataProvider";
})(ArtistForAlbumForApiContractEffectiveRolesEnum = exports.ArtistForAlbumForApiContractEffectiveRolesEnum || (exports.ArtistForAlbumForApiContractEffectiveRolesEnum = {}));
var ArtistForAlbumForApiContractRolesEnum;
(function (ArtistForAlbumForApiContractRolesEnum) {
    ArtistForAlbumForApiContractRolesEnum["Default"] = "Default";
    ArtistForAlbumForApiContractRolesEnum["Animator"] = "Animator";
    ArtistForAlbumForApiContractRolesEnum["Arranger"] = "Arranger";
    ArtistForAlbumForApiContractRolesEnum["Composer"] = "Composer";
    ArtistForAlbumForApiContractRolesEnum["Distributor"] = "Distributor";
    ArtistForAlbumForApiContractRolesEnum["Illustrator"] = "Illustrator";
    ArtistForAlbumForApiContractRolesEnum["Instrumentalist"] = "Instrumentalist";
    ArtistForAlbumForApiContractRolesEnum["Lyricist"] = "Lyricist";
    ArtistForAlbumForApiContractRolesEnum["Mastering"] = "Mastering";
    ArtistForAlbumForApiContractRolesEnum["Publisher"] = "Publisher";
    ArtistForAlbumForApiContractRolesEnum["Vocalist"] = "Vocalist";
    ArtistForAlbumForApiContractRolesEnum["VoiceManipulator"] = "VoiceManipulator";
    ArtistForAlbumForApiContractRolesEnum["Other"] = "Other";
    ArtistForAlbumForApiContractRolesEnum["Mixer"] = "Mixer";
    ArtistForAlbumForApiContractRolesEnum["Chorus"] = "Chorus";
    ArtistForAlbumForApiContractRolesEnum["Encoder"] = "Encoder";
    ArtistForAlbumForApiContractRolesEnum["VocalDataProvider"] = "VocalDataProvider";
})(ArtistForAlbumForApiContractRolesEnum = exports.ArtistForAlbumForApiContractRolesEnum || (exports.ArtistForAlbumForApiContractRolesEnum = {}));
var ArtistForAlbumForApiContract = /** @class */ (function (_super) {
    __extends(ArtistForAlbumForApiContract, _super);
    function ArtistForAlbumForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artist" }),
        __metadata("design:type", artistcontract_1.ArtistContract)
    ], ArtistForAlbumForApiContract.prototype, "artist", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", String)
    ], ArtistForAlbumForApiContract.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=effectiveRoles" }),
        __metadata("design:type", String)
    ], ArtistForAlbumForApiContract.prototype, "effectiveRoles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isSupport" }),
        __metadata("design:type", Boolean)
    ], ArtistForAlbumForApiContract.prototype, "isSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ArtistForAlbumForApiContract.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roles" }),
        __metadata("design:type", String)
    ], ArtistForAlbumForApiContract.prototype, "roles", void 0);
    return ArtistForAlbumForApiContract;
}(utils_1.SpeakeasyBase));
exports.ArtistForAlbumForApiContract = ArtistForAlbumForApiContract;
