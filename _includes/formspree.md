# Contactez-moi

<form id="contact-form" action="https://formspree.io/{{ site.data.infos.email-obfuscation }}" method="POST">
	<fieldset class="form-group col-xs-8 col-xs-offset-2">
		<input id="form-email" type="email" name="_replyto" class="form-control" placeholder="Votre email*" />
		<input id="form-nom" type="text" name="Nom" class="form-control" placeholder="Votre nom*" />
		<textarea id="form-message" name="Message" class="form-control" placeholder="Votre message*" rows="10"></textarea>
		<select class="form-control" name="Infolettre">
			<option>Merci de m’envoyer l’infolettre</option>
			<option>Non merci, pas d’infolettre</option>
		</select>
	</fieldset>
	<fieldset class="form-group col-xs-8 col-xs-offset-2">
		<input type="text" name="_format" value="plain" style="display:none" />
		<input type="text" name="_gotcha" style="display:none" />
		<button type="submit" class="btn btn-primary col-xs-4 col-xs-offset-4">Envoyer</button>
	</fieldset>
	<fieldset id="form-status" class="form-group col-xs-8 col-xs-offset-2 hidden">
	</fieldset>
</form>
