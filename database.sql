CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.');
  
  INSERT INTO "gallery"
("url","title", "description")
VALUES
('images/sddefault.jpg', 'GOAT!!', 'Photo of McJesus dismantling the Flames');

INSERT INTO "gallery"
("url","title", "description")
VALUES
('images/metro16_top.jpg', 'HomerDome!!', 'Hubert H. Humphrey Metrodome');

INSERT INTO "gallery"
("url","title", "description")
VALUES
('images/ken-griffey-tb2bmhk22drd1gw6.jpg', 'The Kid!!', 'Griffey has a private pilot certificate and owns a Cirrus SR22');