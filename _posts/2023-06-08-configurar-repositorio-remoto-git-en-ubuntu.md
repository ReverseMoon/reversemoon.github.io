---
title: "Configurar repositorio remoto GIT en Ubuntu"
tags:
  - git
  - ubuntu
toc: true
toc_label: "Contenido"
toc_icon: "bars"
---

## Configuración Inicial

Lo primero que haremos sera actualizar el sistema e instalar un
editor de texto, en esta ocasion utilizaremos **nano**.

```yaml
apt-get update -y && apt-get upgrade -y
apt-get -y install nano
```
Instalaremos **Git** y habilitaremos **Git shell**.

```yaml
apt-get install -y git
echo "/bin/git-shell" >> /etc/shells
```
Cree un nuevo grupo para los usuarios de Git y especifique la autenticación sin contraseña para este grupo:

```yaml
groupadd git_users
```
Utilizando **nano** añada las siguientes líneas al final del archivo `/etc/ssh/sshd_config`.

```yaml
nano /etc/ssh/sshd_config
```

```yaml
Match Group git_users
PasswordAuthentication no
```

Reinicie el servicio SSH.
```yaml
service sshd restart
```
Cree una nueva carpeta para alojar los futuros repositorios remotos **git**:

```yaml
mkdir /repositorios
```
## Creación de usuarios 

Cree un usuario Git y en el home de dicho usuario un archivo authorized_keys para guardar las claves públicas SSH:
```yaml
useradd -g git_users user_git
mkdir /home/user_git/.ssh
chmod 700 /home/user_git/.ssh
echo ""> /home/user_git/.ssh/authorized_keys
chmod 600 /home/user_git/.ssh/authorized_keys
chown -R user_git:git_users /home/user_git/.ssh
usermod --shell /bin/git-shell user_git
```

## Creación de un repositorio remoto
Creamos nuestro e inicializamos el repositorio con `--bare` para permitir realizar Pull y Push.
Y luego cambiamos el grupo del directorio actual a `git_users`.
```yaml
mkdir /repositorios/repo_git.git
cd /repositorios/repo_git.git
git init --bare --shared=group
sudo chgrp -R git_users .
```
## Autorización SSH y gestión de acceso

Proporcione acceso para user_git al repositorio repo_git:

```yaml
unlink /home/user_git/repo_git.git
sudo ln -s /repositorios/repo_git.git /home/user_git/
chown -R user_git:git_users /home/user_git
```

Genere una nueva clave **SSH** en la maquina que se conectara a su repositorio remoto con el siguiente código.
Puede que requiera instalar [Git](https://git-scm.com/downloads).

```yaml
ssh-keygen
```
Copie el contenido de su archivo `id_rsa.pub` que en Windows generalmente se guarda en `C:\Users\[Usuario]\.ssh`
donde `[Usuario]` es el nombre de tu Usuario Actual.
<br>

Ahora en nuestro repositorio remoto abrimos con nuestro editor de código como **nano** 
el siguiente archivo y copiamos el contenido de `id_rsa.pub` que debe comenzar con `ssh-rsa ...`.

```yaml
nano /home/user_git/.ssh/authorized_keys
```
Guardamos cambios y reinciamos el servicio **SSHD**.

```yaml
service sshd restart
```
## Configuración del lado del cliente

Nos aseguramos que se haya definido el `email` y `name` en la configuracion de **git**. Puedes definirlo con:

```yaml
git config --global user.email "yourmail@mail.com"
git config --global user.name "Your Name"
```
Agregarmos un remote en git con donde `[host_servidor_remoto]` es la **IP** o **URL** donde se se encuentra el repositorio remoto que acabos de crear y `origin` es el nombre del remote el cual puede ser cambiado por otro para poderlo identificar en caso de tener varios remotes definidos en nuestro repositorio.

```yaml
git remote add origin user_git@[host_servidor_remoto]:repo_git.git
```

Ahora ya podemos incializar un repositorio y enviarlo al repositorio remoto:

```yaml
git init .
echo "Commit Incial" > readme.md
git add .
git commit -m "initial commit"
git push origin master
```

Si ya cuentas con un repositorio existente solo tendras que escribir lo siguiente:

```yaml
git push origin master
```