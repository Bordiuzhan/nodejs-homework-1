c

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
https://monosnap.com/file/JHb6be6pVC3gLT5jyKL9rZYEOJf2Qp

# Отримуємо контакт по id

node index.js --action="get" --id=5
https://monosnap.com/file/7tF9y6cwTezpy7ONSCiMwoeM6rBXlV

# Додаємо контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/15QB05ZMhDt5wS3j756HtYMYjn1mZi

# Видаляємо контакт

node index.js --action="remove" --id=3
https://monosnap.com/file/OZRLD4enGVKp80EjRbItDoP8321Lrp
