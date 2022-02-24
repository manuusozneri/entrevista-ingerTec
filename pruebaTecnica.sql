USE miprimernombre2021223

CREATE TABLE tresource_type(idResourceType INT AUTO_INCREMENT,
							created DATETIME,
                            descrip VARCHAR(200),
                            PRIMARY KEY (idResourceType));
                            
CREATE TABLE tresource(idResource INT AUTO_INCREMENT,
						created DATETIME,
                        descrip VARCHAR(200),
                        idResourceType INT, 
                        PRIMARY KEY (idResource),
                        foreign key (idResourceType) references tresource_type(idResourceType));
                        
                        
INSERT INTO tresource_type VALUES (01, '2022-02-23', 'Video'),
								(02, '2022-02-23', 'PDF Documentacion'),
                                (03, '2022-02-23', 'PDF Enunciado'),
                                (04, '2022-02-23', 'PDF Solucion');
                                
INSERT INTO tresource (idResource, created, descrip, idResourceType) VALUES 
	(01, '2022-03-03', 'Video', 01),
    (02, '2022-03-03', 'PDF Solucion', 04),
    (03, '2022-03-03', 'PDF Enunciado', 03),
    (04, '2022-03-03', 'PDF Enunciado', 03),
    (05, '2022-03-03', 'PDF Documentacion', 02),
    (06, '2022-03-03', 'PDF Solucion', 04),
    (07, '2022-03-03', 'Video', 01),
    (08, '2022-03-03', 'Video', 01),
    (09, '2022-03-03', 'PDF Documentacion', 02),
    (10, '2022-03-03', 'PDF Enunciado', 03),
    (11, '2022-03-03', 'PDF Solucion', 04),
    (12, '2022-03-03', 'PDF Documentacion', 02);
    
SELECT * FROM tresource;
SELECT * FROM tresource_type;

SELECT descrip, COUNT(*) as counter FROM tresource group by descrip

