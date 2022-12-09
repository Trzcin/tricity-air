# Wizualizacja jakości powietrza w Trójmieście

![Podgląd](https://github.com/Trzcin/tricity-air/assets/Preview.png)

## Uruchamianie

```
cd frontend
npm install
npm run dev
```

## Funkcje

Panel boczny pozwala dostosować jakie informacje są wyświetlane na wykresie.
Zmienić można rozpatrywany przedział czasowy, związek chemiczny, lub wyświetlić dane tylko z konkretnych stacji pomiarowych GIOŚ.

![Panel](https://github.com/Trzcin/tricity-air/assets/Sidebar.png)

## Wykorzystane technolgie

Dane po przetworzeniu w Microsoft Excel, wyeksportowane zostały do plików .csv, a następnie przekonwertowane na pliki .json. Przetworzone pliki json znajdują się w `frontend/src/data/`.
Do stworzenia strony użyte zostały biblioteki [Svelte](https://svelte.dev/) oraz [Chart.js](https://www.chartjs.org/).
