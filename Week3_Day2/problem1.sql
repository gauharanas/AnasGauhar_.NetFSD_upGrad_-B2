
--problem 1 
CREATE DATABASE EventDb;
GO

USE EventDb;
GO

  --problem 2
CREATE TABLE UserInfo
(
    EmailId VARCHAR(100) PRIMARY KEY,

    UserName VARCHAR(50) NOT NULL,

    Role VARCHAR(20) NOT NULL
    CHECK (Role IN ('Admin','Participant')),

    Password VARCHAR(20) NOT NULL,

    CHECK (LEN(UserName) BETWEEN 1 AND 50),

    CHECK (LEN(Password) BETWEEN 6 AND 20)
);

--problem 3
CREATE TABLE EventDetails
(
    EventId INT PRIMARY KEY,

    EventName VARCHAR(50) NOT NULL,

    EventCategory VARCHAR(50) NOT NULL,

    EventDate DATETIME NOT NULL,

    Description VARCHAR(255),

    Status VARCHAR(20)
    CHECK (Status IN ('Active','In-Active'))
);

--problem 4
CREATE TABLE SpeakersDetails
(
    SpeakerId INT PRIMARY KEY,

    SpeakerName VARCHAR(50) NOT NULL,

    CHECK (LEN(SpeakerName) BETWEEN 1 AND 50)
);

--problem 5
CREATE TABLE SessionInfo
(
    SessionId INT PRIMARY KEY,

    EventId INT NOT NULL,

    SessionTitle VARCHAR(50) NOT NULL,

    SpeakerId INT NOT NULL,

    Description VARCHAR(255),

    SessionStart DATETIME NOT NULL,

    SessionEnd DATETIME NOT NULL,

    SessionUrl VARCHAR(255),

    FOREIGN KEY (EventId)
    REFERENCES EventDetails(EventId),

    FOREIGN KEY (SpeakerId)
    REFERENCES SpeakersDetails(SpeakerId)
);


--problem 6
CREATE TABLE ParticipantEventDetails
(
    Id INT PRIMARY KEY,

    ParticipantEmailId VARCHAR(100) NOT NULL,

    EventId INT NOT NULL,

    SessionId INT NOT NULL,

    IsAttended BIT,

    FOREIGN KEY (ParticipantEmailId)
    REFERENCES UserInfo(EmailId),

    FOREIGN KEY (EventId)
    REFERENCES EventDetails(EventId),

    FOREIGN KEY (SessionId)
    REFERENCES SessionInfo(SessionId)
);
