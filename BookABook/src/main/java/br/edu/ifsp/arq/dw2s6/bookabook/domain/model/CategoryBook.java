package br.edu.ifsp.arq.dw2s6.bookabook.domain.model;

public enum CategoryBook {
	
	FANTASIA("Fantasia"),
	FICCAO("Ficção"),
	HORROR("Horror"),
	SUSPENSE("Suspense"),
	INFANTIL("Literatura Infantil"),
	ACADEMICO("Acadêmico"),
	BIOGRAFICO("Biografia"),
	ROMANCE("Romance"),
	HQ("HQ"),
	NACIONAL("Literatura Nacional"),
	OUTROS("Outros");
	
	
	private String category;
	
	CategoryBook(String category) {
		this.category = category;
	}
	
	public String getCategory() {
		return category;
	}

}
