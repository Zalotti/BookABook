package br.edu.ifsp.arq.dw2s6.bookabook.domain.model;

public enum BookRate {

	MUITO_BAIXA("Muito Baixa"),
	BAIXA("Baixa"),
	MÉDIA("Média"),
	ALTA("Alta"),
	MUITO_ALTA("Muito Alta");
	
private String rate;
	
	BookRate(String rate) {
		this.rate = rate;
	}
	
	public String getRate() {
		return rate;
	}
}
