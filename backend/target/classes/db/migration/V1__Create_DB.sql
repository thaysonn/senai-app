IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'inscricoes')
BEGIN
    CREATE TABLE inscricoes (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        Data DATETIME NOT NULL,
        Nome NVARCHAR(100) NOT NULL,
        Casa NVARCHAR(50) NOT NULL,
        CPF NVARCHAR(20) NOT NULL,
        Especializacao NVARCHAR(100) NOT NULL,
        Email NVARCHAR(100) NOT NULL,
        Telefone NVARCHAR(20) NOT NULL
    );
END;
GO