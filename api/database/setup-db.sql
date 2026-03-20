DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    story_id INT GENERATED ALWAYS AS IDENTITY,
    story_heading TEXT NOT NULL,
    story_description TEXT,
    story_category TEXT,
    story_date TIMESTAMP,
    PRIMARY KEY (story_id)
);

INSERT INTO diary
    (story_heading, story_description, story_category, story_date)
VALUES
    ('Test 1', 'This is a test description', 'Rant', '2026-03-20 15:13:34'),
    ('Test 2', 'This is another test description for a different heading', 'Relationship', '2026-03-15 21:37:16');