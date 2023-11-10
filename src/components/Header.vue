 <template>
	<header id="header" role="banner">
		<div class="wrap">
			<a href="/" id="logo">
				<img width="178" height="52" src="../assets/logo/logo.png" alt="gerelt" />
			</a>
			<div class="menu-wrap">
				<div class="search-site">
					<button class="search-toggle">
						<span class="search-icon"></span>Search
					</button>
          <form method="get" action="/" role="search">
						<label for="s">Search the Site</label>
						<input type="text" class="search" name="s" id="s" />
						<button class="search-button">Search</button>
					</form>
				</div>
				<button class="menu-toggle menuBtn">
					<span class="menu-toggle-icon"><span></span></span>Tohiruulga.mn
				</button>
			</div>
		</div>
	</header>
	<div aria-hidden="true">
		<div class="mega-menu-bg"></div>
		<div class="mega-menu">
			<div class="mega-menu-header">
				<div class="wrap">
					<button class="menu-toggle">
						<span class="menu-toggle-icon"><span></span></span>Tohiruulga.mn
					</button>
				</div>
			</div>
			<div class="wrap">
				<nav class="site-menu" aria-label="Main Menu">
					<ul id="menu-main-menu" class>
						<li id="menu-item-1084"
							class="service-grid menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1084">
							<a href="our-services/index.html">Tohiruulga.mn</a><span></span>
							<ul class="sub-menu">
								<li id="menu-item-1103"
									class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1103">
									<a href="our-services/families/index.html">Талархал
										Services</a><span></span>
									<ul class="sub-menu">
										<li id="menu-item-1546"
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1546">
											<a href="our-services/families/foster-care/index.html">Товч танилцуулга
												Services</a><span></span>
										</li>
										<li id="menu-item-1547"
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1547">
											<a href="our-services/families/behavioral-health-services/index.html">Зохиогчийн эрхийн мэдэгдэл</a><span></span>
										</li>
										<li id="menu-item-1548"
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1548">
											<a href="our-services/juvenile-justice-services/index.html">Үйлдэл гүйцэтгэх чадвар алдалт</a><span></span>
										</li>
										<li id="menu-item-1549"
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1549">
											<a href="our-services/families/day-treatment/index.html">Халуун сэдвүүд</a><span></span>
										</li>
										<li id="menu-item-1550"
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1550">
											<a
												href="our-services/communities/childrens-services/transitional-supports/index.html">Хуулийн мэдээллийн булан</a><span></span>
										</li>
										<li id="menu-item-1551"
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1551">
											<a
												href="our-services/communities/childrens-services/autism-services/index.html">Нэмэлт сургалт ба зөвлөгөө мэдээлэл</a><span></span>
										</li>
										<li id="menu-item-1552"
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1552">
											<a
												href="our-services/communities/childrens-services/early-intervention-services/index.html">Ханган нийлүүлэгч</a><span></span>
										</li>
                    <li id="menu-item-1552"
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1552">
											<a
												href="our-services/communities/childrens-services/early-intervention-services/index.html">Санал сэтгэгдэл</a><span></span>
										</li>
                    <li id="menu-item-1552"
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1552">
											<a
												href="our-services/communities/childrens-services/early-intervention-services/index.html">Холбоо барих</a><span></span>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<nav class="utility-menu mobile" aria-label="Mobile Utility Menu">
					<ul id="menu-legal-menu-1" class>
						<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2037">
							<a href="contact-us/index.html">Contact Us</a>
						</li>
						<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1787">
							<a href="locations/index.html">Locations</a>
						</li>
						<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-538">
							<a href="legal-statement/index.html">Legal Statement</a>
						</li>
						<li
							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-537">
							<a rel="privacy-policy" href="privacy-policy/index.html">Privacy Policy</a>
						</li>
						<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1326">
							<a href="compliance/index.html">Compliance</a>
						</li>
						<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1779">
							<a href="nondiscrimination-statement/index.html">Nondiscrimination Statement</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>

</template>
  
<script>

import "../assets/styles/main.css"

export default {
    name: 'Header',
};

</script>
  
<style scoped>

#header {
  text-decoration: none !important;
}

a {
  text-decoration: none !important;
}

ul {
  padding: 0;
}


</style>






   