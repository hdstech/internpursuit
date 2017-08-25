<template>
    <div id='student-profile'>
		<div class="hero">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">Welcome</h1>
					<h3 class="subtitle">Let's take a moment to get your profile set up.</h3>
				</div>
			</div>
		</div>

		<!-- Profile section -->
		<div class="section columns">

				<div class="column container" >
					<div class="columns" >
						<!-- Contact info -->
						<div class="card column is-two-thirds is-paddingless" id="my-form1">
							<div class="card-header activated">
								<div class="card-header-title column">
									<p class="title">Contact
										<a href="#">
											<icon name="angle-up" class="is-pulled-right" style="padding-right: 5px;" scale="2.5"></icon>
										</a>
									</p>
								</div>
							</div>
							<div class="card-content columns">
								<input class="input column is-5" type="text" name="firstname" placeholder="First name">
								<input class="input column is-5 is-offset-2" type="text" name="lastname" placeholder="Last name">
							</div>
							<div class="card-content columns">
								<input class="input" name="username" type="text" placeholder="Username">
							</div>
							<div class="card-content columns">
								<input class="input column is-5" type="password" name="pwd" placeholder="Password">
								<input class="input column is-5 is-offset-2" name="confirm_pwd" id="confirmPwd" type="text" placeholder="Confirm password">
							</div>
							<div class="card-content columns">
								<input class="input" type="email" name="email" placeholder="Email">
							</div>
							<div class="card-content columns">
								<input class="input column is-5" name="phone" placeholder="Phone">
								<input class="input column is-5 is-offset-2" placeholder="Website (optional)">
							</div>
							<div class="column is-offset-10">
								<button class="button is-large" id="form-nav-btn">Next</button>
							</div>
						</div>
						<div class="column">
							<h1>test</h1>
						</div>
					</div>

					<br><br>
				<div class="column is-two-thirds">
					<div class="card" id="my-form2">
						<div class="card-header">
							<div class="card-header-title column">
								<p class="title">Education
									<a href="#">
										<icon name="angle-down" class="is-pulled-right" style="padding-right: 5px;" scale="2.5"></icon>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

    </div>
</template>

<script>
export default {
    name: 'student-profile'

}
</script>

<style scoped>
.hero{
	background-color: #AF2328;
	margin-bottom: 4em;
}
.hero h1, .hero h3 {
	color: #FFF;
}
.title {
	font-size: 3.5em;
}
.subtitle {
	font-size: 2em;
}
.activated, .activated p{
	background-color: #AF2328;
	border-radius: 8px 8px 0px 0px;
	color: #FFF;
}
.card-header, .card-header p{
	border-radius: 8px 8px 0px 0px;
}
#my-form1 {
	border-radius: 8px 8px 0px 0px;
}
#my-form1 .title {
	font-size: 2.5em;
}
#my-form2 {
	border-radius: 8px 8px 0px 0px;
}
#my-form2 .title {
	font-size: 2.5em;
}
#form-nav-btn {
	width: 5em;
	background-color: #AF2328;
	border-radius: 8px;
	border: none;
	color: #FFF;
	right: .5em;
}
input {
	height: 3em;
}
</style>
