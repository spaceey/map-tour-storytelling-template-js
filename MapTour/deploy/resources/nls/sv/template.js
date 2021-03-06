﻿define(
({
		viewer: {
			loading: {
				step1: "LÄSER IN PROGRAM",
				step2: "LÄSER IN DATA",
				step3: "INITIERAR FÄRDEN",
				loadBuilder: "VÄXLA TILL BYGGLÄGET",
				fail: "Det gick inte att läsa in Map Tour",
				failButton: "Försök igen"
			},
			errors: {
				boxTitle: "Ett fel har inträffat",
				portalSelf: "Allvarligt fel: det gick inte att hämta portalkonfigurationen",
				invalidConfig: "Allvarligt fel: ogiltig konfiguration",
				invalidConfigOwner: "Allvarligt fel: ogiltig konfiguration (auktoriserad ägare krävs)",
				invalidConfigNoWebmap: "Allvarligt fel: ogiltig konfiguration (webbkarta eller applikations-ID anges inte i index.html)",
				createMap: "Det går inte att skapa kartan",
				invalidApp: "Allvarligt fel: programmet kunde inte läsas in",
				noLayer: "Webbkartan innehåller inte ett giltigt datalager för Map Tour.",
				noLayerMobile: "Välkommen till webbprogrammet Map Tour. Programmet har inte konfigurerats. Map Tour-byggverktyget stöds inte på mobila enheter.",
				noLayerView: "Välkommen till webbprogrammet Map Tour.<br />Programmet har inte konfigurerats än.",
				appSave: "Det uppstod ett fel när webbprogrammet skulle sparas",
				mapSave: "Det uppstod ett fel när webbkartan skulle sparas",
				featureServiceLoad: "Fel när geoobjektstjänst lästes in",
				notAuthorized: "Du är inte behörig att konfigurera det här programmet",
				oldBrowserTitle: "Webbläsaren stöds inte fullt ut",
				noBuilderIE8: "Map Tour-byggverktyget kan inte användas i Internet Explorer äldre än version 9.",
				ie10Win7Explain: "Det interaktiva Map Tour-byggverktyget går inte att använda med Internet Explorer 10 i Windows 7 när datakällan är en geoobjekttjänst med bilagor. För att kunna använda en geoobjekttjänst med bilagor måste du <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>manuellt tvinga dokumentläget till Internet Explorer 9-standard</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>nedgradera till Internet Explorer 9</a> eller uppgradera till Windows 8.",
				oldBrowserExplain: "Denna webbläsare stöder inte automatisk generering av miniatyrbilder från bilderna som du överför till din karttur. Du kan skapa en karttur med den här webbläsaren, men du måste lägga till en separat miniatyrbild för varje bild som du överför.",
				oldBrowserExplain2: "För att förbättra upplevelsen kan du <a href='http://browsehappy.com/' target='_blank'>uppgradera webbläsaren</a> eller <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>aktivera Google Chrome Frame for Internet Explorer</a>.",
				oldBrowserExplain3: "Map Tour byggverktyget går inte att använda med Internet Explorer 10 i Windows XP.",
				oldBrowserClose: "Stäng"
			},
			mobileHTML: {
				showIntro: "VISA TITEL",
				hideIntro: "DÖLJ TITEL",
				navList: "Lista",
				navMap: "Karta",
				navInfo: "Bilder",
				introStartBtn: "Starta"
			},
			desktopHTML: {
				storymapsText: "En berättelsekarta",
				builderButton: "Växla till byggläget",
				bitlyTooltip: "Hämta en kort länk till applikationen"
			},
			builderHTML: {
				panelHeader: "PROGRAMKONFIGURATION",
				buttonSave: "SPARA",
				buttonDiscard: "AVBRYT",
				buttonSettings: "Inställningar",
				buttonView: "Visningsläge",
				buttonItem: "Öppna webbapplikationsobjektet",
				buttonHelp: "Hjälp",
				buttonOrganize: "Organisera",
				buttonAdd: "Lägg till",
				buttonImport: "Importera",
				buttonImportDisabled: "Det går inte att importera när du använder en geoobjekttjänst med bilagor",
				dataEditionDisabled: "Dataredigering är inaktiverat på CSV-datakällan",
				dataSourceWarning: "Map Tour-datalagret har ändrats. Om geoobjektens ID inte är likadana måste du återställa ordningen och dolda punkter med <b>Organisera</b>. Om fältnamnen skiljer sig åt måste du återställa fältinställningarna på <b>datafliken i Inställningar</b>.",
				dataPicError0a: "Den här turen innehåller <b>%NB%</b> webbadresser till bilder som inte är kompatibla.",
				dataPicError0b: "Den här turen kan innehålla <b>%NB%</b> webbadresser till bilder som inte är kompatibla.",
				dataPicError1: "Webbadresser till bilder måste numera ha något av följande filnamnstillägg: .jp(e)g, .png, .gif eller .bmp.",
				dataPicError2: "Det påverkar inte den befintliga publicerade versionen av kartturen, men om du vill kunna använda det interaktiva byggverktyget måste du först åtgärda de felaktiga webbadresserna på något av följande sätt:",
				dataPicError3: "Redigera webbadresser",
				dataPicError4: "<i>#isPicture</i> läggs till i slutet av webbadresser till bilder som inte stöds. De flesta servrar har stöd för tillägg i webbadresser. När du har gjort det bör du kontrollera att de uppdaterade webbadresserna fungerar genom att gå igenom punkterna. Om alla bilder läses in kan du spara kartturen. <b>Spara inte kartturen om det finns bilder som inte fungerar</b>. Läs in byggverktyget igen och gå igenom steg två igen.",
				dataPicError5: "Använd bara bilder i turen",
				dataPicError6: "Med det här alternativet betraktas alla webbadresser som bilder, men du kommer inte att kunna lägga till videoklipp med det interaktiva byggverktyget. Du kan ångra den här åtgärden om du vill lägga till videoklipp i ett senare skede.",
				dataPicError7: "Endast bilder används i kartturen, videoklipp kan inte användas. Om du tar bort den begränsningen bör du kontrollera att bilderna fortfarande fungerar som de ska innan du sparar kartturen. Du kan begränsa kartturen till bilder igen i ett senare skede om det skulle behövas.",
				dataPicError8: "Ta bort begränsningen till bilder",
				dataPicError9: "Om webbadresserna pekar på videoklipp kan du ignorera den här varningen. Om de pekar på bilder måste du göra något av följande:",
				modalCancel: "Avbryt",
				modalApply: "Använd",
				organizeHeader: "Organisera färden",
				organizeGeneralCaption: "Sortera färdpunkterna genom att dra och släppa",
				organizeDelete: "Ta bort",
				organizeHide: "Dölj",
				organizeReset: "Återställ ordning och dolda punkter",
				addMaxPointReached: "Du har uppnått det maximala antalet punkter som tillåts av ikonuppsättningen och det går inte att lägga till fler turpunkter.<br /><br />Tänk på att om du tar bort befintliga punkter måste du läsa in programmet igen.",
				addMaxPointReachedMobile: "Du har tyvärr nått det maximala antalet punkter som tillåts och bilden kan inte läggas till.",
				addClose: "Stäng",
				addHeader: "Lägg till en ny turpunkt",
				addTabPicture: "Media",
				addTabInformation: "Information",
				addTabLocation: "Plats",
				addSelectCaption: "Välj eller släpp bild",
				addNoteVideo: "Läs i hjälpen om hur du använder videoklipp",		
				addSelectCaptionNoFileReader: "Välj bild",
				addChangePhoto: "Ändra bild och miniatyrbild",
				addPictureResolutionIntro: "Bildens upplösning är högre än vad som krävs:",
				addPictureResolutionOldBrowser: "Bildens upplösning är högre än vad som krävs. Optimera Map Tour-upplevelsen genom att ange en lägre upplösning än %RECOMMENDED_RES%.",
				addPictureResolutionResize: "Ändra bildens upplösning till %RESOLUTION%",
				addPictureResolutionKeep: "Behåll den ursprungliga upplösningen, %RESOLUTION%",
				addSelectThumbnail: "Välj miniatyrbild",
				addNoThumbSelected: "Ingen miniatyrbild har valts",
				addThumbSelected: "Vald",
				addCameraSettingsHeader: "KAMERAINSTÄLLNINGAR",
				addThumbnailHeader: "MINIATYRBILD",
				addLabelPicUrl: "Bild",
				addLabelThumbUrl: "Miniatyrbild",
				addTextPlaceholderUrl: "Ange en bild-URL",
				addTextPlaceholderUrl2: "Ange en URL för en Youtube-sida",
				addTextPlaceholderUrl3: "Ange en URL för en Vimeo-sida",
				addTextPlaceholderUrl4: "Ange en inbäddad URL för ett videoklipp",
				addLabelVideo: "Video",
				addMediaVideoOther: "Annat",
				addMediaVideoHelp: "Kontrollera URL:en och hämta standardminiatyrbilden",
				addMediaVideoHelpTooltip1: "Kontrollen lyckades",
				addMediaVideoHelpTooltip2: "Kontrollen misslyckades",
				addMediaVideoHelpTooltip4: "Hitta alternativet för att bädda in videon och kopiera den video-URL som finns i koden",
				addLabelName: "Namn",
				addLabelDescription: "Bildtext",
				addTextPlaceholder: "Skriv något",
				addLocatePlaceholder: "Hitta en adress eller plats",
				addPinColor: "Färg",
				addLatitude: "Latitud",
				addLongitude: "Longitud",
				addLatitudePlaceholder: "t.ex. 34.056",
				addLongitudePlaceholder: "t.ex. -117.195",
				addUploading: "Laddar upp färdpunkt",
				addSave: "Lägg till färdpunkt",
				addMobileUploading: "Laddar upp bild",
				addMobileName: "Ange ett namn",
				addMobileNameMandatory: "Ett fel har uppstått, ange ett namn.",
				addMobileError: "Något har tyvärr gått fel",
				settingsHeader: "Programinställningar",
				settingsTabLayout: "Layout",
				settingsTabColor: "Färger",
				settingsTabLogo: "Rubrik",
				settingsTabFields: "Data",
				settingsTabExtent: "Utbredning",
				settingsTabZoom: "Zoomnivå",
				settingsLayoutExplain: "Välj inställningar för applikationens layout.",
				settingsLayoutProfessional: "Trepanelslayout",
				settingsLayoutModern: "Integrerad layout",
				settingsLayoutSelected: "Markerad layout",
				settingsLayoutSelect: "Markera denna layout",
				settingsLayoutNote: "För punkter som använder videoklipp kommer plakatet alltid att placeras under videoklippet, även om alternativet inte har markerats.",
				settingsColorExplain: "Ändra utseende genom att välja ett fördefinierat tema, eller skapa ett eget.",
				settingsLabelColor: "Färger på rubrik, innehåll och sidfot",
				settingsLogoExplain: "Anpassa rubriklogotypen (maxstorlek är 250 x 50 px).",
				settingsLogoEsri: "Esris logotyp",
				settingsLogoNone: "Ingen logotyp",
				settingsLogoCustom: "Egen logotyp",
				settingsLogoCustomPlaceholder: "Bild-URL",
				settingsLogoCustomTargetPlaceholder: "Genomklickningslänkar",
				settingsLogoSocialExplain: "Anpassa den övre högra rubriklänken.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Länk",
				settingsLogoSocialDisabled: "Den här funktionen har inaktiverats av administratören",
				settingsDataFieldsExplain: "Välj fotonamn, bildtext och färgfält.",
				settingsDataFieldsError: "Programmet kan inte identifiera rätt namn, bildtext eller färgdata. Välj de fält som ska användas här. Inställningarna kan ändras senare.",
				settingsFieldsLabelName: "Namn",
				settingsFieldsLabelDescription: "Bildtext",
				settingsFieldsLabelColor: "Färg",
				settingsFieldsReset: "Återställ valda fält",
				settingsExtentExplain: "Ange ursprungsinnehåll för Map Tour via den interaktiva kartan nedan.",
				settingsExtentExplainBottom: "Den utbredning du definierar ändrar webbkartans inledande utbredning. Observera att utbredningen inte används om den inte innehåller den första turpunkten. I så fall öppnas turen centrerad på den första punkten.",
				settingsExtentDateLineError: "Det går inte att ha en utbredning över 180°-meridianen",
				settingsExtentDateLineError2: "Det gick inte att beräkna utbredningen",
				settingsExtentDrawBtn: "Rita en ny utbredning",
				settingsExtentModifyBtn: "Redigera utbredning",
				settingsExtentApplyBtn: "Förhandsgranska i kartturen",
				settingsExtentUseMainMap: "Använd kartturens utbredning",
				settingsZoomExplain: "Ställ in zoom för berättelsepunkter efter introduktionen (valfritt).",
				settingsLabelZoom: "Skala/nivå",
				settingsZoomFirstValue: "Ingen",
				settingsFieldError: "Välj ett fält i varje lista",
				dataExplain: "Geoobjekttjänsten kommer att läggas till i din webbkarta. Den delas inte med någon och bara du har behörighet att lägga till, redigera och ta bort behörigheter.<br /><br />Om du ändrar behörigheterna för applikationsdelning, frågar systemet om du vill uppdatera konfigurationen för delning av geoobjekttjänster. Det här är nödvändigt för att användarna ska få tillgång till dina data. Det är fortfarande bara du själv som har redigeringsbehörighet.",
				dataNameLbl: "Tjänstnamn",
				dataFolderListLbl: "Mapp",
				dataFolderListFetching: "Hämtar mappar ...",
				dataRootFolder: "Rot",
				dataNameError: "Ange ett namn för den framtida tjänsten",
				dataFolderError: "Välj en giltig mapp",
				dataSrcContainsInvalidChar: "Geoobjektstjänstens namn innehåller ett eller flera ogiltiga tecken (-, <, >, #, %, :, \", ?, &, +, / eller \).",
				dataSrvAlreadyExistsError: "Det finns redan en tjänst med det namnet inom organisationen. Välj ett annat namn.",
				dataBtnSave: "Skapa tjänsten",
				dataFooterProgress: "Processen pågår",
				dataFooterSucceed: "Processen lyckades. Objektet laddas",
				dataFooterError: "Processen misslyckades. Försök igen",
				tabError: "Sök efter fel i alla flikar",
				introRecordBtn: "Intro",
				introRecordActivate: "Använd den första punkten som introduktion (visas inte i karusellen)"
			},
			addPopupJS: {
				uploadingPicture: "Laddar upp bild",
				uploadSuccess: "Uppladdningen lyckades",
				uploadError: "Det uppstod ett fel när bilden skulle laddas upp",
				notJpg: "Välj ett foto i jpeg-format som ska laddas upp",
				errorNoPhoto: "Välj en bild att ladda upp",
				errorNoThumbnail: "Välj en miniatyrbild att ladda upp",
				errorInvalidPicUrl: "Ange en giltig bild-URL (börjar med http(s):// och slutar med jpg, png, gif eller bmp). Du kan lägga till ”#isPicture” i slutet av webbadressen för att åsidosätta den regeln.",
				errorInvalidThumbUrl: "Ange en giltig miniatyrbild-URL (börjar med http(s):// och slutar med jpg, png, gif eller bmp).",
				errorInvalidVideoUrl: "Ange en giltig video-URL (börjar med http(s)://)",
				errorNoName: "Ange ett namn för denna färdpunkt",
				errorNoDescription: "Ange en bildtext för färdpunkten",
				errorNoLocation: "Ange en plats för denna färdpunkt"
			},
			builderJS: {
				noPendingChange: "Ingen väntande ändring",
				unSavedChangeSingular: "1 osparad ändring",
				unSavedChangePlural: "osparade ändringar",
				popoverDiscard: "Vill du kasta alla osparade ändringar?",
				yes: "Ja",
				no: "Nej",
				popoverLoseSave: "Om du öppnar vyn förlorar du alla osparade ändringar",
				ok: "OK",
				popoverSaveWhenDone: "Glöm inte att spara när du är klar",
				closeWithPendingChange: "Vill du bekräfta åtgärden? Du kommer att förlora dina ändringar.",
				gotIt: "OK",
				savingApplication: "Sparar programmet",
				saveSuccess: "Programmet har sparats",
				saveError: "Det gick inte att spara, försök igen",
				dragColorPicker: "Flytta runt mig<br />eller ändra min färg",
				dataWarningExtent: "Det finns data utanför webbkartans utbredning. Dessa data kommer inte att användas som färdpunkter. Ändra kartans utbredning om du vill använda dem.",
				dataWarningVisibi: "Ditt Map Tour-lager är inte synligt med kartans aktuella utbredning. Kontrollera att ditt Map Tour-lager är synligt med en större karta i storleken %MAPSIZE%.",
				dataWarningEdit: "Redigera webbkarta",
				dataWarningClose: "Stäng",
				signIn: "Logga in med ett konto på",
				signInTwo: "och spara programmet."
			},
			organizePopupJS: {
				messageStart: "Du har valt att ta bort",
				messageSinglePoint: "en färdpunkt",
				messageMultiPoint: "färdpunkter",
				messagePermantRemove: "Detta tar för alltid bort",
				messageRecord: "posten",
				messageRecordPlural: "posterna",
				messageConfirm: "från databasen. Vill du fortsätta?",
				labelButtonShow: "Visa",
				labelButtonHide: "Dölj"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "Bilden och miniatyrbilden tas bort permanent",
				popoverDeleteWarningThumb: "Miniatyrbilden tas bort permanent",
				popoverUploadingPhoto: "Laddar upp bild och miniatyrbild",
				popoverUploadingThumbnail: "Laddar upp miniatyrbild",
				popoverUploadSuccessful: "Uppladdningen lyckades",
				popoverUploadError: "Uppladdningen misslyckades, försök igen",
				changePicAndThumb: "Byt bild",
				changeThumb: "Byt miniatyrbild",
				selectPic: "Byt media",
				selectThumb: "Byt miniatyrbild",
				uploadPicAndThumb: "Använd"
			},
			headerJS:{
				editMe: "Redigera mig!",
				templateTitle: "Ange malltitel",
				templateSubtitle: "Ange underrubrik för mallen"
			},
			crossFaderJS:{
				setPicture: "Ange bildens namn",
				setCaption: "Ange bildtext till bilden"
			},
			importPopup: {
				title: "Importera",
				prevBtn: "Bakåt",
				nextBtn: "Nästa"
			},
			importPopupHome: {
				header: "Var lagras dina bilder?"
			},
			onlinePhotoSharingCommon: {
				disabled: "Den här funktionen har inaktiverats av administratören",
				disabledPortal: "Den här funktionen är inaktiverad för Portal for ArcGIS",
				header1: "Bilderna måste delas offentligt.",
				header2: "Importen begränsas till %NB1% bilder för att hålla gränsen på %NB2% punkter per tur.",
				emptyDataset: "Fel, inga bilder hittades",
				footerImport: "Importera",
				selectAlbum: "Välj ett offentligt album",
				selectAlbum2: "Välj ett album",
				pleaseChoose: "Välj",
				userLookup: "Slå upp",
				userLookingup: "Slår upp",
				csv: "Refererad i en CSV-fil",
				fromScratch: "Börja från början",
				select: "Gör ett val",
				locUse: "Använd bildplatser",
				locExplain: "Du kanske inte vill använda bildplatser eftersom dessa kan hämtas från albumet, och då hamnar alla bilder på samma plats."
			},
			viewFlickr: {
				header: "Ange ett Flickr-användarnamn och välj en bilduppsättning eller etikett som ska importeras.",
				userInputLbl: "Ange ett användarnamn",
				signInMsg2: "Det gick inte att hitta användaren",
				selectSet: "Välj en fotouppsättning",
				selectTag: "eller välj en etikett",
				footerImportTag: "Importera vald etikett",
				footerImportSet: "Importera vald uppsättning"
			},
			viewFacebook: {
				header: "Autentisera med ett Facebook-användarkonto eller använd en offentlig sida. Privata album kan användas för att skapa en offentlig karttur som inte kräver Facebook-användarautentisering. Kommentarer och liknande förblir privata.",
				leftHeader: "Facebook-användare",
				rightHeader: "Facebook-sida",
				pageExplain: "En Facebook-sida är ett offentligt varumärke/produkt eller en kändis, till exempel <b>esrigis</b>. Du kan hitta sidnamnet efter det första '/'-tecknet i sidans webbadress.",
				pageInputLbl: "Ange ett sidnamn",
				lookupMsgError: "Det gick inte att hitta sidan"
			},
			viewPicasa: {
				header: "Ange e-postadress eller ID för ett Picasa- eller Google+-konto.",
				userInputLbl: "Ange e-postadress eller ID",
				signInMsg2: "Det gick inte att hitta kontot",
				howToFind: "Hitta ett konto-ID",
				howToFind2: "Kopiera siffrorna mellan det första och andra '/'-tecknet på en Picasa- eller G+-sida"
			},
			viewCSV: {
				uploadBtn: "Välj eller släpp en CSV-fil",
				resultHeaderEmpty: "CSV-filen är tom",
				resultHeaderSuccess: "%NB_POINTS% punkter har laddats",
				resultHasBeenLimited: "Importen har begränsats till de första %VAL1% punkterna av %VAL2% för att hålla gränsen på %VAL3% punkter per tur",
				browserSupport: "Webbläsaren stöds inte. För att använda en CSV-fil måste du <a href='http://browsehappy.com/' target='_blank'>uppgradera webbläsaren</a> eller använda kartvyn på ArcGIS.com (se hjälpen).",
				errorLatLng: "Det gick inte att hitta fälten Latitud och Longitud. Möjliga värden för latitud är: <i>%LAT%</i> och för longitud: <i>%LONG%</i>.",
				errorFieldsExplain: "Det gick inte att läsa in eftersom följande obligatoriska fält inte hittades",
				errorFieldsName: "<b>Namn</b> möjliga värden är: %VAL%",
				errorFieldsDesc: "<b>Beskrivning</b> möjliga värden är: %VAL%",
				errorFieldsUrl: "<b>Bild-URL</b> möjliga värden är: %VAL%",
				errorFieldsThumb: "<b>Miniatyrbild-URL</b> möjliga värden är: %VAL%",
				errorFields2Explain: "Det gick inte att läsa in eftersom CSV-filen inte använder samma attribut som lagret för följande attribut",
				errorFields2Name: "<b>Namn</b> använd %VAL1% i stället för %VAL2%",
				errorFields2Desc: "<b>Beskrivning</b> använd %VAL1% i stället för %VAL2%",
				errorFields2Url: "<b>Bild-URL</b> använd %VAL1% i stället för %VAL2%",
				errorFields2Thumb: "<b>Miniatyrbild-URL</b> använd %VAL1% i stället för %VAL2%",
				resultFieldsAll: "Alla attribut har importerats",
				resultFieldsNotAll: "Följande attribut har inte importerats eftersom de inte finns i kartlagret",
				resultFieldsNotAll2: "Följande attribut har importerats",
				footerNextBtnResult: "Importera till webbkartan",
				footerProgress: "Import pågår",
				footerSucceed: "Importen är färdig. Läser in"
			},
			viewGeoTag: {
				header: "Klicka eller peka på bilderna du vill importera för att platsbestämma dem.",
				headerMore: "Varför blir mina bilder inte platsbestämda?",
				headerExplain: "Om bilderna har en giltig plats blir de automatiskt platsbestämda på kartan och visas på den andra fliken.<br /><br />Som standard utnyttjar Picasa och Flickr inte bildens EXIF-platsmetadata. Kontrollera Flickr/Picasa-inställningarna på fliken Sekretess för att aktivera användning av platsbestämning för bilder. Du måste kanske importera om bilderna helt till Flickr/Picasa.<br /><br />För Facebook måste du gå in på varje bild, klicka på Redigera och välja plats bland de föreslagna alternativ som bygger på bildens EXIF-metadata.",
				leftPanelTab1: "Att platsbestämma",
				leftPanelTab2: "Platsbestämd",
				clickOrTap: "Klicka eller peka på kartan för att platsbestämma",
				clickDrop: "Importera inte",
				footerImport: "Importera",
				footerProgress: "Import pågår",
				footerSucceed: "Importen är färdig. Läser in ...",
				loading: "Läser in",
				error: "Det gick inte att importera bilderna från platsen. Platserna ignoreras."
			},
			initPopup: {
				title: "Välkommen till Map Tour-byggverktyget",
				prevBtn: "Bakåt",
				nextBtn: "Nästa"
			},
			initPopupHome: {
				header2: "Med det här hjälpmedlet kan du bygga en karttur med hjälp av bilder som redan lagras online, eller importera dem till ditt ArcGIS Online for Organizations-konto.",
				title1: "Mina bilder är redan driftade",
				title2: "Jag behöver drifta mina bilder",
				hostedFsNA: "Endast tillgängligt för användare med utgivar- och administratörsbehörighet i ArcGIS for Organizations",
				footer1: "Glöm inte att dela din karttur med övriga användare via applikationens objektsida när du är färdig.",
				footer2: "Map Tour-hjälp",
				footer3: "Hämta CSV-mallen",
				footer4: "\"Spara som\" om det inte går att hämta",
				footerProgress: "Processen pågår",
				footerSucceed: "Skapandet är färdigt. Läser in ..."
			},
			helpPopup: {
				title: "Hjälp",
				close: "Stäng",
				tab1: {
					title: "Introduktion",
					div1: "Map Tour-mallen är utformad för att presentera geografisk information när det finns tilltalande bildelement i berättelsen du vill framföra.",
					div2: "Mallen används för att skapa en attraktiv och användarvänlig webbapplikation där du kan presentera en liten uppsättning platser på en karta i en numrerad ordningsföljd som användarna kan bläddra igenom. Mallen är utformad för att användas med alla webbläsare för alla enheter, inklusive smartphones och surfplattor.",
					div3: "I den här hjälpen finns anvisningar för hur du publicerar kartturer:",
					div4: "<ul><li><a href='http://storymaps.esri.com/stories/demo/map_tour/?webmap=7190edafe7464cb19c1caf1360cd6ee5' target='_blank'>Palm Springs-kartturen</a></li><li><a href='http://story.maps.arcgis.com/apps/MapTour/index.html?appid=4d6054b109ce482d88588d5c06a7a478' target='_blank'>Nederländernas bästa mountainbiking</a></li><li><a href='http://ugis.esri.com/LA_River_Tour/' target='_blank'>Los Angeles-flodkartturen</a></li></ul>",
					div5: "Vi vill gärna att du hör av dig! Tveka inte att dela din karttur med oss:",
					div6: "<ul><li><a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a></li><li><a href='http://storymaps.esri.com/home/' target='_blank'>StoryMaps-webbplatsen</a></li><li><a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a></li></ul>",
					div7: "Har du hittat ett fel eller vill du föreslå en ny funktion? Meddela oss genom att skicka in ett ärende via <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub-projektsidan</a>."
				},
				tab2: {
					title: "Data",
					div1: "Det viktigaste att tänka på när du skapar en karttur är att välja var bilderna ska lagras. Kartturen kan innehålla bilder som finns lagrade på de vanligaste fotodelningstjänsterna, på en webbserver eller som bilagor i en geoobjekttjänst.",
					div1a: "I det sista avsnittet på den här fliken finns information om vilka bild- och videoformat som stöds.",
					div2: "Det interaktiva byggverktyget innehåller två alternativ för att hantera bilderna i kartturen:",
					div3: "<ul><li>Du kan använda <b>bilder som redan finns online</b>, till exempel bilder som lagras på en fotodelningswebbplats, som Flickr, eller på din egen webbplats. De refereras i kartturen via webbadresserna till dem</li><li>Du kan även <b>överföra bilder från datorn</b> direkt till kartturen. Det kräver att du har en ArcGIS Online-prenumeration och utgivar- eller administratörsbehörighet eftersom det automatiskt skapas en driftad geoobjekttjänst där bilderna lagras som bilagor.</li></ul>",
					div4: "De vanligaste exemplen är:",
					div4b: "<b>Bilderna är inte driftade</b> än och du har ett ArcGIS Online-konto: Det bästa alternativet är att använda en driftad geoobjekttjänst. Precis som i vanliga fotodelningstjänster optimeras bilderna så att de snabbt går att läsa in och du har tillgång till alla administrations- och datahanteringsfunktioner som finns i ArcGIS.",
					div5: "<b>Du är inte medlem i en organisation</b>: Du måste först lägga upp bilderna på en fotodelningswebbplats eller en webbserver. Sedan kan du använda bilderna med hjälp av byggverktyget. Bilderna fortsätter att vara driftade på den ursprungliga platsen.",
					div6: "<b>Du vill återanvända en befintlig geoobjekttjänst</b> som lagrar bilderna som bilagor eller refererar till externa bilder: Mer information finns nedan.",
					div7: "<b>Du använder en tidigare version</b> av Map Tour-mallen och har redan en CSV-fil som refererar till bilderna och miniatyrbilderna: Du kommer att kunna importera den och justera dina data. Det går bara att använda CSV-filer med lat-/long-fält i byggverktyget. Adressbaserade CSV-filer kan även fortsättningsvis användas i webbkartan (mer information finns i avsnittet nedan).",
					div8: "Importera från onlinefotodelningstjänster",
					div9: "Importen refererar till redan driftade bilder genom att lagra webbadresserna till dem i en geoobjektsamling för webbkartor. Bilderna lagras inte i ArcGIS Online. Om de driftade bilderna inte kan nås så blir de inte tillgängliga i kartturen och en bild med ett felmeddelande visas istället. Namn, beskrivning och plats för bilderna kanske inte importeras beroende på vilken tjänsteleverantör du använder. De attributen lagras i webbkartan och de ändringar du gör i onlinetjänsterna återspeglas inte i kartturen.",
					div10: "Lagra bilderna på en webbserver",
					div11: "Om du väljer att drifta bilderna själv måste du manuellt skapa miniatyrbilder för bilderna. Om du använder bilder med full upplösning för miniatyrbilderna blir prestandan sämre. Därför rekommenderar vi starkt att du använder en fotodelningstjänst online eller en geoobjekttjänst som gör det åt dig.",
					div12: "Använda en befintlig geoobjekttjänst eller shapefil",
					div13: "Alla punktgeoobjekttjänster eller shapefiler går att använda som datakällor för Map Tour. Du behöver bara lägga till dem som ett lager i webbkartan i kartvisningsfönstret på ArcGIS.com. Om applikationen hittar attributen i lagret kommer alla funktioner i byggverktyget att vara tillgängliga.",
					div14: "Förväntade fält är (ej skiftlägeskänsliga):",
					div151: "Namn",
					div152: "Beskrivning",
					div153: "Bild",
					div154: "Miniatyrbild",
					div155: "Färg (valfritt)",
					div16: "Du måste fylla i fälten Namn och Beskrivning. Om applikationen inte hittar matchande fält när en geoobjekttjänst används fungerar inte kartvisningsfönstret förrän du har konfigurerat fälten för att användas via byggverktyget. CSV- och shapefillager som läggs till i webbkartan måste innehålla alla nödvändiga fält för att byggverktyget ska fungera.",
					div162: "När du använder en geoobjekttjänst som lagrar bilderna som bilagor <b>är det endast geoobjekt med två bilagor som används</b>. Den första bilagan definierar huvudbilden och den andra miniatyrbilden.",
					div17: "Du måste fylla i fälten Bild och Miniatyrbild för geoobjekttjänster utan bilagor. Du behöver inte göra det för geoobjekttjänster med bilagor, men det rekommenderas starkt att du gör det. Om bilagor är aktiverat för tjänsten kan du ladda upp bilder som bilagor i byggverktyget. Annars kan du bara redigera bildernas och miniatyrbildernas webbadresser.",
					div172: "Om fälten Bild och Miniatyrbild har fyllts i kommer de alltid att användas, och geoobjekttjänstens bilagor anropas inte.",
					div173: "Exempel på CSV-filer och shapefiler kan hämtas från",
					div18: "Skapa en driftad geoobjekttjänst av en CSV-fil eller shapefil",
					div19: "När du skapar en driftad geoobjekttjänst av en CSV-fil eller shapefil är bilagorna inte aktiverade som standard. Du aktiverar dem genom att öppna geoobjekttjänstens informationssida och klicka på den lilla pilen i lageravsnittet så visas det alternativet. De bilder och miniatyrbilder som du har refererat till i attributen fortsätter att användas. Om du i stället vill ladda upp bilderna som geoobjekttjänstbilagor kan du göra det med hjälp av de två knapparna på bildpanelen (Byt bild och Byt miniatyrbild).",
					div20: "Bild- och videoformat som stöds",
					div21: "De bildformat som stöds är: <b>JPG, JPEG, PNG, GIF och BMP</b>. Om filen inte har något av de filnamnstilläggen behandlas den som ett videoklipp i Map Tour, utom när du använder en geoobjekttjänst (se nedan).",
					div22: "Map Tour-mallen innehåller inte någon videospelare. Du måste använda en extern videospelare från den videotjänst du använder (leta upp alternativet för att bädda in videoklippet och kopiera den URL som finns i koden). Om du vill drifta videoklippen själv kan du skapa en HTML-sida som innehåller en videospelare, till exempel <a href='http://www.videojs.com/'>Video.js</a>.",
					div23: "Det interaktiva byggverktyget innehåller ingen dialogruta för att ta med videoklipp när du använder geoobjekttjänster med bilagor, men det går att ta med videoklipp genom att redigera data utanför det interaktiva byggverktyget. I kartvisningsfönstret på ArcGIS.com kan du till exempel ändra bildfälten så att de pekar på ett externt videoklipp och lägga till en särskild parameter i slutet av webbadressen (#isVideo). Då behandlas filerna som videoklipp.",
					div24: "Du måste dock fortfarande ha två giltiga bildbilagor, annars används inte punkten. Det går inte att använda videoklipp när du använder geoobjekttjänstbilagor utan fälten Bild och Miniatyrbild."
				},
				tab3: {
					title: "Anpassning",
					div1: "Byggverktyget innehåller flera anpassningsalternativ som finns tillgängliga via knappen INSTÄLLNINGAR i den översta panelen. Om du inte kan hitta det alternativ du förväntar dig, finns även en nedladdningsbar version som du kan distribuera på webbservern och anpassa efter dina behov.",
					div2: "Vi rekommenderar att du använder den driftade versionen utom i följande fall:",
					div3: "<li>Om den inte har den gränssnittsanpassning som du vill använda, till exempel om du vill lägga in en bakgrundsbild för rubriker.</li><li>Du är en utvecklare och vill förbättra applikationen.</li>",
					div4: "Den nedladdningsbara versionen går att konfigurera via en webbkarta eller en identifierare för webbkartapplikationer. De vanligaste användningsexemplen är:",
					div41: "Du skapar en karttur med det interaktiva byggverktyget i den driftade miljön och konfigurerar mallen med webbkartapplikationens ID. De inställningar du gör med byggverktyget används.",
					div42: "Du skapar en webbkarta utanför det interaktiva byggverktyget och konfigurerar mallen med webbkartans ID. Du måste läsa dokumentationen där det finns mer information om hur mallen konfigureras.",
					div43: "Det interaktiva byggverktyget kan hämtas men det finns vissa tekniska begränsningar i en del webbläsare, till exempel äldre versioner av Internet Explorer än 10.",
					div5: "Besök <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub-projektsidan</a> om du vill läsa mer om den nedladdningsbara versionen."
				},
				tab4: {
					title: "Tips",
					div0: "Webbläsare som stöds",
					div0a: "Map Tour-visaren kan användas med Internet Explorer 8 eller senare. Det interaktiva byggverktyget kan användas med Internet Explorer 9 eller senare. Vi testar aktivt alla större webbläsare, men om det uppstår problem rekommenderar vi att du använder Chrome.",
					div0b: "Hör gärna av dig om det uppstår problem. Om du skapar kartturen med en CSV-mall behöver du inte använda byggverktyget lika mycket.",
					div1: "Bilder",
					div2: "Vi rekommenderar bilder i liggande format istället för stående. Stående bilder kan användas men på mindre skärmar, till exempel en iPad, kan en stor del av bilden skymmas av bildtexten (texten tar upp mer utrymme när den visas på höjden än när den visas på bredden). Även om bilder av olika storlek, form och orientering kan användas i samma karttur rekommenderar vi att du använder exakt samma storlek och form på alla bilderna. På så vis distraheras inte användaren av bildernas olika storlekar under kartturen.",
					div2a: "Om du driftar bilderna själv rekommenderar vi en maximal upplösning på <b>1090 × 725</b> för huvudbilder och <b>140 × 93</b> för miniatyrbilder.",
					div3: "Formatera bildtexten med HTML-taggar",
					div4: "Rubriken och bildtexten kan innehålla HTML-taggar för formatering och länkar. Med den här koden läggs till exempel en gul länk till:",
					div5: "Stödlager",
					div6: "Du kan lägga till stödlager med bakgrundsinformation i kartturen. De kan innehålla andra geoobjekt som du vill ska visas på kartan förutom färdpunkterna, till exempel ett undersökningsområde, en gång- eller körväg som förbinder färdpunkterna osv. I Map Tour-mallen visas stödlagren med den symbologi du anger i webbkartan, men popup-fönster kan inte användas.",
					div7: "Håll turen kort och intressant",
					div8: "Det finns en gräns på 99 punkter per tur. De flesta kartturer är givetvis mycket kortare än så. Förvänta dig inte att användarna vill gå igenom allt för många färdpunkter. Du kanske tycker att ämnet är fascinerande, men utgå inte från att de tycker likadant.",
					div9: "Du kan läsa mer i <a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>den detaljerade beskrivningen</a>.",
					div10: "Inbäddningsläge",
					div11: "Om du vill bädda in mallen i en annan webbplats via en iframe kan du ta bort rubriken genom att lägga till parametern \"&embed\" i slutet av webbadressen. Det läget går också att ställa in i den nedladdningsbara versionen med hjälp av konfigurationsfilen." 
				},
				tab5: {
					title: "Publicera",
					div1: "Glöm inte att dela kartturen med övriga användare på applikationens informationssida i ArcGIS Online när du är färdig. När du gör det får du en fråga om du vill uppdatera resurser som den är beroende av (webbkarta, geoobjekttjänst) och som inte delas på samma sätt. Om kartturen är offentlig och någon av resurserna inte delas med användarna omdirigeras de till inloggningssidan för ArcGIS Online.",
					div2: "Om du använder en driftad geoobjekttjänst som har skapats med Map Tour-byggverktyget sköts säkerheten för tjänsten automatiskt och du är den enda som har redigeringsbehörighet även om tjänsten delas offentligt.",
					div3: "Innan du delar en karttur offentligt måste du se till att den fungerar när du inte är inloggad på ditt ArcGIS.com-konto.",
					div4: "Det kan vara bra att se hur kartturen ser ut på en iPad i liggande läge. Det gör det enklare att se om bildtexterna täcker för mycket av bilderna."
				}
			}
        }
    })
);
