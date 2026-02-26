class Config:
    SECRET_KEY = 'sua_chave_secreta_aqui'
    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://usuario:senha@localhost/taskmanager'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
