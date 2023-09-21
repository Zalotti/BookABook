package br.edu.ifsp.arq.dw2s6.bookabook.domain.model;

public enum BookRate {

	MUITO_BAIXA("Muito Baixa"),
	BAIXA("BAIXA"),
	MÉDIA("MÉDIA"),
	ALTA("ALTA"),
	MUITO_ALTA("MUITO ALTA");
	
private String rate;
	
	BookRate(String rate) {
		this.rate = rate;
	}
	
	public String getRate() {
		return rate;
	}
}
