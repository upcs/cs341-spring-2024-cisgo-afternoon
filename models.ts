// note about SQL here: ARRAYS OF VARIABLE LENGTH ARE BANNED.
// we can assume any reference to an Interface is done by key.

export type Email = ShortString;
export type PhoneNumber = ShortString;
export type Token = string; // never know how our tokens are gonna look until we have them 
export type DB_KEY = number; // INTEGER: should be a PK AUTOINCREMENT
export type Paragraph = string;
export type ShortString = string;
export type PersonName = ShortString; // should be fuzzy matchable

export type Latitude = number;
export type Longitude = number;
export type LocationName = string;

interface _ContactInfo {

	email_work ?: Email;
	phone_work ?: PhoneNumber;
	phone_home ?: PhoneNumber;
	phone_cell ?: PhoneNumber;
	email_personal ?: Email;
}

interface _Reviewer extends _ContactInfo {
	name : PersonName;
	field : ShortString;
	// contact : ContactInfo;
}

interface _Review {
	reviewer : _Reviewer;
	description : Paragraph;
	date : Date;
	location : _Location;
}

interface _Coordinates {
	x : Longitude;
	y : Latitude;
}

interface _Session {
	token ?: Token;
	isAdmin : boolean;
}

interface _Location extends _Coordinates {
	name : LocationName;
}

interface _AdminCreds {
	// some identifier
}

interface _DatabaseEntry {
	ID: DB_KEY;
}

export type Location = _Location & _DatabaseEntry;
export type AdminCreds = _AdminCreds & _DatabaseEntry;
export type Review = _Review & _DatabaseEntry;
export type Session = _Session; // no need to store this in SQL; this is short-term storage.