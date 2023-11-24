package br.edu.ifsp.arq.dw2s6.bookabook.domain.model;

public enum CategoryBook {
	
	FANTASIA("Fantasia"),
	FICÇÃO("Ficção"),
	HORROR("Horror"),
	SUSPENSE("Suspense"),
	INFANTIL("Literatura Infantil"),
	ACADÊMICO("Acadêmico"),
	BIOGRÁFICO("Biografia"),
	ROMANCE("ROMANCE"),
	HQ("HQ"),
	NACIONAL("LITERATURA NACIONAL");
	
	
	private String category;
	
	CategoryBook(String category) {
		this.category = category;
	}
	
	public String getCategory() {
		return category;
	}

}
