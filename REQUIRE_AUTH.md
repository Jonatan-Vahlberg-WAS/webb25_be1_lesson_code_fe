
Komponenten ska:

- Se till att man inte kan komma åt delar av koden
- Antingen kunna visa ett meddelande eller inget alls om man inte är inloggad
- Ta emot en roll som krävs

användning
```jsx
<RequireAuth role={"admin"} showMessage={false}>
    <button {...}> Delete song</button>
</RequireAuth>
```